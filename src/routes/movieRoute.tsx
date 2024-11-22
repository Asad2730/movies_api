import { Router } from "express";
import { getMovies } from "../controllers/movieController";

const movieRoutes = Router();
movieRoutes.post("/signup", getMovies);
export { movieRoutes };
