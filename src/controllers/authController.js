export const googleLogin = (req, res) => {
  // This route is just a redirect trigger, Passport handles the flow
  res.send("Redirecting to Google for authentication...");
};

export const googleCallback = (req, res) => {
  // If authentication succeeds, user info will be in req.user
  if (!req.user) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  res.json({
    message: "Google authentication successful",
    role: req.user.constructor.name, // Student or Mentor
    user: req.user,
  });
};

export const logout = (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    res.json({ message: "Logged out successfully" });
  });
};

export const getCurrentUser = (req, res) => {
  if (!req.user) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  res.json({
    role: req.user.constructor.name, // Student or Mentor
    user: req.user,
  });
};