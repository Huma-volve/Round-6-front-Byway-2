import { Router } from "express";
import {
  signup,
  login,
  resendOtp,
  verifyOtp,
  getMe,
} from "../controllers/authController";
import { verifyToken } from "../middlewares/authMiddleware";

const router = Router();

// ✅ Auth Routes
router.post("/signup", signup); // Register user + return OTP
router.post("/resend-otp", resendOtp); // Handle expired OTP and generate a new one
router.post("/verify-otp", verifyOtp); // OTP verification + return JWT + user data
router.post("/login", login); // Login with email + password, return JWT + user data
router.get("/me", verifyToken, getMe); // Get the user data after reopening the website

export default router;
