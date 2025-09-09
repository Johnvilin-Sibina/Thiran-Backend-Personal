import express from "express";
import passport from "passport";
import {
  googleLogin,
  googleCallback,
  logout,
  getCurrentUser,
} from "../controllers/authController.js";

const router = express.Router();

// Google login route
// Example frontend: /api/auth/google?role=student OR /api/auth/google?role=mentor
router.get(
  "/google",
  (req, res, next) => {
    // Pass role from query into session, so passport strategy can use it
    const role = req.query.role;
    
    if (!role) {
      return res.status(400).json({ error: "Role parameter is required" });
    }
    
    // Call passport.authenticate with the role dynamically
    passport.authenticate("google", {
      scope: ["profile", "email"],
      state: role
    })(req, res, next);
  },
  googleLogin
);

// Google callback route
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  googleCallback
);

// Current logged-in user
router.get("/me", getCurrentUser);

// Logout
router.get("/logout", logout);

export default router;
