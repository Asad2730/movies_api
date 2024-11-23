import mongoose from "mongoose";
import Favorite, { type IFavorites } from "../models/favorite";

export const AddFavoriteService = async (favorite: IFavorites) => {
  try {
    await Favorite.create(favorite);
    return "Favorite marked";
  } catch (error) {
    throw new Error(`Error adding favorite: ${error}`);
  }
};

export const GetFavoritesService = async (page: number) => {
  try {
    const limit = 10;
    const skip = (page - 1) * limit;

    const favorites = await Favorite.find().skip(skip).limit(limit);
    const totalCount = await Favorite.countDocuments();

    return {
      favorites,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page,
    };
  } catch (error) {
    throw new Error(`Error fetching favorites: ${error}`);
  }
};

export const GetFavoriteService = async (id: string) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid ID format");
    }

    const favorite = await Favorite.findById(new mongoose.Types.ObjectId(id));

    if (!favorite) {
      throw new Error("Favorite not found");
    }

    return favorite;
  } catch (error) {
    throw new Error(`Error fetching favorite: ${error}`);
  }
};
