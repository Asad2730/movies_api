import { Router } from "express";
import { AddFavorite, GetFavorites } from "../controllers/favoriteController";

const favoriteRoutes = Router();
favoriteRoutes.post("/", AddFavorite);
favoriteRoutes.get('/',GetFavorites)
export { favoriteRoutes };
