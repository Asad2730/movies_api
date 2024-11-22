import { Router } from "express";
import { authRoutes } from "./authRoute";
import { movieRoutes } from "./movieRoute";
import { verifyToken } from "../middlewares/authMiddleware";

const router = Router();

router.use("/auth", authRoutes);
router.use("/movies", verifyToken, movieRoutes);
export default router;
