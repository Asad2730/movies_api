import { Router } from "express";
import { AddFavorite, GetFavorite, GetFavorites } from "../controllers/favoriteController";

const favoriteRoutes = Router();
favoriteRoutes.post("/", AddFavorite);
favoriteRoutes.get('/',GetFavorites)
favoriteRoutes.get('/:id',GetFavorite)
export { favoriteRoutes };
