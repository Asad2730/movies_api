import { Router } from "express";
import { AddFavorite, GetFavorites } from "../controllers/movieController";

const movieRoutes = Router();
movieRoutes.post("/", AddFavorite);
movieRoutes.get('/',GetFavorites)
export { movieRoutes };
