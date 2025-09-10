import express from "express";
import passport from "passport";
import {
  googleLogin,
  googleCallback,
  logout,
  getCurrentUser,
} from "../controllers/authController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Google OAuth authentication APIs
 */

/**
 * @swagger
 * /api/auth/google:
 *   get:
 *     summary: Initiate Google login
 *     description: |
 *       **⚠️ IMPORTANT: This endpoint cannot be tested directly in Swagger UI due to browser CORS restrictions.**
 *       
 *       This endpoint initiates Google OAuth flow and requires a full browser redirect.
 *       
 *       **To test this endpoint:**
 *       1. Copy the URL: `http://localhost:5000/api/auth/google?role=student`
 *       2. Open it directly in your browser
 *       3. Complete the Google authentication flow
 *       
 *       **How it works:**
 *       - Redirects user to Google for authentication
 *       - Requires a `role` query parameter (`student` or `mentor`)
 *       - After Google auth, redirects to `/api/auth/google/callback`
 *       
 *       **Example URLs:**
 *       - Student: `http://localhost:5000/api/auth/google?role=student`
 *       - Mentor: `http://localhost:5000/api/auth/google?role=mentor`
 *     tags: [Authentication]
 *     parameters:
 *       - in: query
 *         name: role
 *         required: true
 *         schema:
 *           type: string
 *           enum: [student, mentor]
 *         description: Role of the user trying to authenticate
 *     responses:
 *       302:
 *         description: Redirects to Google OAuth consent screen
 *         content:
 *           application/json:
 *             example:
 *               message: Redirecting to Google for authentication...
 *       400:
 *         description: Role parameter missing
 *         content:
 *           application/json:
 *             example:
 *               message: "Role parameter is required"
 */

/**
 * @swagger
 * /api/auth/google/callback:
 *   get:
 *     summary: Google OAuth callback
*     description: |
 *       **⚠️ IMPORTANT: This endpoint cannot be tested directly in Swagger UI.**  
 *       
 *       This endpoint is the callback URL that Google redirects to **after the user grants permission**.  
 *       It is automatically triggered by Google during the OAuth flow and should not be called manually from Swagger.  
 *       
 *       **How it works:**
 *       - Google redirects here after successful authentication
 *       - Passport verifies the user and creates/returns a Student or Mentor
 *       - On success, the user session is established and user data is returned
 *       
 *       **To test this endpoint:**
 *       1. Manually initiate the flow via `/api/auth/google?role=student` or `/api/auth/google?role=mentor`
 *       2. After authenticating with Google, you will be redirected to this endpoint automatically
 *       
 *       **Example manual test:**
 *       - Start here: `http://localhost:5000/api/auth/google?role=student`
 *       - After Google login, you’ll be redirected to `/api/auth/google/callback`
 *       - The response will contain the authenticated user info
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Google authentication successful
 *         content:
 *           application/json:
 *             example:
 *               message: "Google authentication successful"
 *               role: "Student"
 *               user:
 *                 id: 123
 *                 firstName: John
 *                 lastName: Doe
 *                 username: john_doe
 *                 email: johndoe@gmail.com
 *                 profilePicture: "https://lh3.googleusercontent.com/a/default-user"
 *                 linkedinProfile: null
 *       401:
 *         description: Authentication failed
 *         content:
 *           application/json:
 *             example:
 *               message: "Authentication failed"
 */

/**
 * @swagger
 * /api/auth/me:
 *   get:
 *     summary: Get current logged-in user
 *     description: Returns the currently authenticated user's details (student or mentor). Requires a valid session.
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Authenticated user details
 *         content:
 *           application/json:
 *             example:
 *               role: "Mentor"
 *               user:
 *                 id: 456
 *                 firstName: Jane
 *                 lastName: Smith
 *                 username: janesmith
 *                 email: janesmith@gmail.com
 *                 profilePicture: "https://lh3.googleusercontent.com/a/default-user"
 *       401:
 *         description: Not authenticated
 *         content:
 *           application/json:
 *             example:
 *               message: "Not authenticated"
 */

/**
 * @swagger
 * /api/auth/logout:
 *   get:
 *     summary: Logout the user
 *     description: Ends the session and logs out the current user.
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Logged out successfully
 *         content:
 *           application/json:
 *             example:
 *               message: "Logged out successfully"
 */



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
