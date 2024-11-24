import { type Request, type Response } from "express";
import { AddFavoriteService, GetFavoriteService, GetFavoritesService } from "../services/favoriteService";

export const AddFavorite = async (req: Request, res: Response) => {
  try {
    console.log('req.body',req.body)
    const rs = await AddFavoriteService(req.body)
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


export const GetFavorite = async(req:Request,res:Response) => {
  try{
     const id = req.params.id;
     const favorite = await GetFavoriteService(id);
     res.json(favorite)
  }catch(error){
    res.json(error)
  }
}