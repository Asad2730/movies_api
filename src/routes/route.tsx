import { Router } from "express";
import { authRoutes } from "./authRoute";
import { favoriteRoutes } from "./favoriteRoute";
import { verifyToken } from "../middlewares/authMiddleware";

const router = Router();

router.use("/auth", authRoutes);
router.use("/favorites", verifyToken, favoriteRoutes);
export default router;
