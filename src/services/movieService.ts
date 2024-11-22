import Favorite, { type IFavorites } from "../models/movie";

export const AddFavoriteService = async (favourie: IFavorites) => {
  try {

    await Favorite.create(favourie)
    return Promise.resolve('Favorite markded');
  } catch (error) {
    return Promise.reject(`Error Adding Favorite`);
  }
};


export const GetFavoritesService = async (page: number) => {
  try {
    const limit = 10;
    const skip = (page - 1) * limit;

    const favorites = await Favorite.find().skip(skip).limit(limit);
    const totalCount = await Favorite.countDocuments();

    return Promise.resolve({
      favorites,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page,
    });
  } catch (error) {
    return Promise.reject('Error Fetching Favorites');
  }
};

