import {type  Request,type Response } from "express"; 
import { GetPaginatedMovies } from "../services/movieService";

export const getMovies = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1; 
    const paginatedMovies = await GetPaginatedMovies(page, 10);
    res.json(paginatedMovies);
  } catch (error) {
    res.json(error);
  }
};
