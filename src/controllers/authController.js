import MentorRefreshToken from "../models/mentorrefreshtoken.js";
import StudentRefreshToken from "../models/studentrefreshtoken.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const googleLogin = (req, res) => {
  // This route is just a redirect trigger, Passport handles the flow
  res.json({message:"Redirecting to Google for authentication..."});
};

export const googleCallback = async(req, res) => {
  // If authentication succeeds, user info will be in req.user
  if (!req.user) {
    return res.status(401).json({ message: "Authentication failed" });
  }
try {
  const {user, role, accessToken, refreshToken} = req.user
  const hashedRefreshToken = await bcryptjs.hash(refreshToken,10)

if(role==="student"){
 const refreshToken =  await StudentRefreshToken.create({
  studentId:user.id,
  refreshToken : hashedRefreshToken
 })
 await refreshToken.save()
}else if(role==="mentor"){
  const refreshToken =  await MentorRefreshToken.create({
  mentorId:user.id,
  refreshToken : hashedRefreshToken
 })
 await refreshToken.save()
}
// Send refresh token as HttpOnly cookie
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

 return res.status(200).setHeader("Authorization", `Bearer ${accessToken}`).json({
    message: "Google authentication successful",
    user,
  });
} catch (error) {
  return res.status(500).json({ message:error.message })
}

};

export const refreshAccessToken = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;

    if (!refreshToken) {
      return res.status(401).json({ message: "Refresh token required" });
    }

    // Decode refreshToken
    const decodedToken = jwt.verify(refreshToken, process.env.JWT_SECRET);

    let storedToken;

    if (decodedToken.role === "student") {
      storedToken = await StudentRefreshToken.findOne({ where: { studentId: decodedToken.id } });
    } else {
      storedToken = await MentorRefreshToken.findOne({ where: { mentorId: decodedToken.id } });
    }

    if (!storedToken) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }

    // Verify hash
    const isValid = await bcryptjs.compare(refreshToken, storedToken.refreshToken);

    if (!isValid) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }

    // Issue new access token
    const newAccessToken = jwt.sign(
      { id: decodedToken.id, role: decodedToken.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).setHeader("Authorization", `Bearer ${newAccessToken}`).json({ message: "Access token refreshed" });

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Invalid or expired refresh token" });
  }
};