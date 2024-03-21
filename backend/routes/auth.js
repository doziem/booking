import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.js";

const router = Router();

// User Registration
router.post("/register",registerUser)

// User Login Route
router.post("/login",loginUser)

export default router