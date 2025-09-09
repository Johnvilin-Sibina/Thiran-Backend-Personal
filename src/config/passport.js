import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import Student from "../models/student.js";
import Mentor from "../models/mentor.js";
// import { usernameGenerator } from "../utils/dataGenerator.js";

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
            //      const {
            //     firstName,
            //     lastName,
            //     phoneNumber,
            //     description,
            //     yearOfGraduation,
            //     linkedinProfile,
            //   } = req.body;
            // const username = usernameGenerator(firstName, lastName);
            user = await Student.create({
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              email,
              username: profile.displayName,
              googleId: profile.id,
              //   phoneNumber,
              //   description,
              //   yearOfGraduation,
              profilePicture: profile.photos[0]?.value,
              //   linkedinProfile
            });
          }
        } else if (role === "mentor") {
          user = await Mentor.findOne({ where: { googleId: profile.id } });

          if (!user) {
            //     const {
            //     firstName,
            //     lastName,
            //     phoneNumber,
            //     description,
            //     linkedinProfile,
            //   } = req.body;
            // const username = usernameGenerator(firstName, lastName);
            user = await Mentor.create({
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              email,
              username: profile.displayName,
              googleId: profile.id,
              profilePicture: profile.photos[0]?.value,
            });
          }
        } else {
          return done(new Error("Invalid role"), null);
        }

        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

// Serialize user → store ID + type in session
passport.serializeUser((user, done) => {
  done(null, { id: user.id, type: user.constructor.name });
});

// Deserialize user → fetch from DB
passport.deserializeUser(async (obj, done) => {
  try {
    if (obj.type === "Student") {
      const student = await Student.findByPk(obj.id);
      return done(null, student);
    } else if (obj.type === "Mentor") {
      const mentor = await Mentor.findByPk(obj.id);
      return done(null, mentor);
    }
  } catch (err) {
    return done(err, null);
  }
});

export default passport;