import { type Request, type Response } from "express";
import { AddFavoriteService, GetFavoritesService } from "../services/movieService";

export const AddFavorite = async (req: Request, res: Response) => {
  try {
    const rs = await AddFavoriteService(req.body);
    res.json(rs);
  } catch (error) {
    res.json(error);
  }
};



export const GetFavorites = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const favorites = await GetFavoritesService(page);
    res.json(favorites);
  } catch (error) {
    res.json(error);
  }
};