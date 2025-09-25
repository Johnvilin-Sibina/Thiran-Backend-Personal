// packages imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUI from "swagger-ui-express";
import { swaggerSpecs } from "./utils/swagger.js";
import passport from "./config/passport.js"; 
import session from "express-session";
import cookieParser from "cookie-parser";

// route imports
import studentRoutes from "./routes/studentRoutes.js";
import mentorRoutes from "./routes/mentorRoutes.js";
import skillRoutes from "./routes/skillRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

//Middlewares
//For Cross Orgin Resource Sharing
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

//Middleware to parse cookies
app.use(cookieParser())

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

//In this path we can see the Docs
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

// for converting request body into json automatically for every request
app.use(express.json());

// for accessing query parameters easily
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to Thiran API Endpoints");
});

// api routes
app.use("/api/students", studentRoutes);
app.use("/api/mentors", mentorRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/auth", authRoutes);

export default app;

