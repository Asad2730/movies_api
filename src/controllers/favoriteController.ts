import { type Request, type Response } from "express";
import { AddFavoriteService, GetFavoriteService, GetFavoritesService } from "../services/favoriteService";

export const AddFavorite = async (req: Request, res: Response) => {
  try {
    
    const rs = await AddFavoriteService(req.body);
    if (!rs) {
      res.status(404).json({ error: 'Favorite not added' });
      return
    } else {
      res.status(201).json(rs);
    }
  } catch (error) {
    res.status(500).json({ error: `Internal server error ${error}` });
  }
};

export const GetFavorites = async (req: Request, res: Response) => {
  try {
    const userId = req.query.userId;
    if (typeof userId !== 'string') {
       res.status(400).json({ error: 'Invalid or missing userId' });
       return
    }

    const page = parseInt(req.query.page as string) || 1;
    const favorites = await GetFavoritesService(page, userId);

    if (!favorites) {
      res.status(404).json({ error: 'No favorites found' });
      return;
    } else {
      res.status(200).json(favorites);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


export const GetFavorite = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const favorite = await GetFavoriteService(id);
    if (!favorite) {
      res.status(404).json({ error: 'Favorite not found' });
      return
    } else {
      res.status(200).json(favorite);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
