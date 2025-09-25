import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import Student from "../models/student.js";
import Mentor from "../models/mentor.js";
import jwt from "jsonwebtoken";

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/api/auth/google/callback",
      passReqToCallback: true, // allows us to read req.query or req.body
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        // role comes from frontend → example: /api/auth/google?role=student
        const role = req.query.state;
        if (!role) return done(new Error("Role not provided"), null);

        const email = profile.emails[0].value;

        let user;

        if (role === "student") {
          user = await Student.findOne({ where: { googleId: profile.id } });
          if (!user) {
            const username = email.split("@")[0];
            user = await Student.create({
              email,
              username,
              googleId: profile.id,
              profilePicture: profile.photos[0]?.value,
            });
            await user.save()
          }
        } else if (role === "mentor") {
          user = await Mentor.findOne({ where: { googleId: profile.id } });

          if (!user) {
            const username = email.split("@")[0];
            user = await Mentor.create({
              email,
              username,
              googleId: profile.id,
              profilePicture: profile.photos[0]?.value,
            });
            await user.save()
          }
        } else {
          return done(new Error("Invalid role"), null);
        }

        const payload = {
          id: user.id,
          role,
        };
        const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        const refreshToken = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "7d",
        });
        console.log("User from Passport:", user);
        return done(null, { user, role, accessToken, refreshToken });
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

export default passport;