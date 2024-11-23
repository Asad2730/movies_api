import mongoose, { Schema, Document } from "mongoose";

export interface IFavorites extends Document {
  wrapperType: string;
  kind: string;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  collectionArtistId: number;
  collectionArtistViewUrl: string;
  collectionViewUrl: string;
  trackViewUrl: string;
  previewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  trackRentalPrice: number;
  collectionHdPrice: number;
  trackHdPrice: number;
  trackHdRentalPrice: number;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness: string;
  trackCount: number;
  trackNumber: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating: string;
  shortDescription: string;
  longDescription: string;
  hasITunesExtras: boolean;
}


const FavoriteSchema: Schema = new Schema({
  wrapperType: { type: String, required: true },
  kind: { type: String, required: true },
  collectionId: { type: Number, required: true },
  trackId: { type: Number, required: true },
  artistName: { type: String, required: true },
  collectionName: { type: String, required: true },
  trackName: { type: String, required: true },
  collectionCensoredName: { type: String, required: true },
  trackCensoredName: { type: String, required: true },
  collectionArtistId: { type: Number, required: true },
  collectionArtistViewUrl: { type: String, required: true },
  collectionViewUrl: { type: String, required: true },
  trackViewUrl: { type: String, required: true },
  previewUrl: { type: String, required: true },
  artworkUrl30: { type: String, required: true },
  artworkUrl60: { type: String, required: true },
  artworkUrl100: { type: String, required: true },
  collectionPrice: { type: Number, required: true },
  trackPrice: { type: Number, required: true },
  trackRentalPrice: { type: Number, required: true },
  collectionHdPrice: { type: Number, required: true },
  trackHdPrice: { type: Number, required: true },
  trackHdRentalPrice: { type: Number, required: true },
  releaseDate: { type: String, required: true },
  collectionExplicitness: { type: String, required: true },
  trackExplicitness: { type: String, required: true },
  trackCount: { type: Number, required: true },
  trackNumber: { type: Number, required: true },
  trackTimeMillis: { type: Number, required: true },
  country: { type: String, required: true },
  currency: { type: String, required: true },
  primaryGenreName: { type: String, required: true },
  contentAdvisoryRating: { type: String, required: true },
  shortDescription: { type: String, required: true },
  longDescription: { type: String, required: true },
  hasITunesExtras: { type: Boolean, required: true },
});

FavoriteSchema.index({ trackId: 1 });

const Favorite = mongoose.model<IFavorites>("favorite", FavoriteSchema);
export default Favorite;
