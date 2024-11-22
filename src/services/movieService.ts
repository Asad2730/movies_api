import Data from "../models/movie";

export const GetPaginatedMovies = async (page: number = 1, limit: number = 10) => {
  try {
    const skip = (page - 1) * limit;

    const result = await Data.aggregate([
      { $unwind: "$results" },
      { $skip: skip },
      { $limit: limit },
      { 
        $project: { 
          "results.wrapperType": 1,
          "results.kind": 1,
          "results.artistName": 1,
          "results.collectionName": 1,
          "results.trackName": 1,
          "results.collectionViewUrl": 1,
          "results.trackViewUrl": 1,
          "results.artworkUrl100": 1,
          "results.releaseDate": 1,
          "results.primaryGenreName": 1,
          "results.shortDescription": 1,
        }
      } 
    ]);

    const totalRecords = await Data.aggregate([
      { $unwind: "$results" },
      { $count: "total" }
    ]);

    const totalPages = Math.ceil(totalRecords[0]?.total / limit);

    return Promise.resolve({
      data: result,
      totalRecords: totalRecords[0]?.total,
      totalPages,
      currentPage: page,
    });
  } catch (error) {
    return Promise.reject(`Error fetching paginated movies: ${error}`);
  }
};
