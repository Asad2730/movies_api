import { Router } from "express";
import { Login, Register } from "../controllers/authController";

const authRoutes = Router();

authRoutes.post("/signup", Register);
authRoutes.post("/login", Login);

export { authRoutes };
