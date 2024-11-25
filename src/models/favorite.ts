import mongoose, { Schema, Document } from "mongoose";
import type { IUser } from "./user";

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
  userId:IUser['_id'];
}


const FavoriteSchema: Schema = new Schema({
  wrapperType: { type: String },
  kind: { type: String },
  collectionId: { type: Number },
  trackId: { type: Number },
  artistName: { type: String },
  collectionName: { type: String },
  trackName: { type: String },
  collectionCensoredName: { type: String },
  trackCensoredName: { type: String },
  collectionArtistId: { type: Number },
  collectionArtistViewUrl: { type: String },
  collectionViewUrl: { type: String },
  trackViewUrl: { type: String },
  previewUrl: { type: String },
  artworkUrl30: { type: String },
  artworkUrl60: { type: String },
  artworkUrl100: { type: String },
  collectionPrice: { type: Number },
  trackPrice: { type: Number },
  trackRentalPrice: { type: Number },
  collectionHdPrice: { type: Number },
  trackHdPrice: { type: Number },
  trackHdRentalPrice: { type: Number },
  releaseDate: { type: String },
  collectionExplicitness: { type: String },
  trackExplicitness: { type: String },
  trackCount: { type: Number },
  trackNumber: { type: Number },
  trackTimeMillis: { type: Number },
  country: { type: String },
  currency: { type: String },
  primaryGenreName: { type: String },
  contentAdvisoryRating: { type: String },
  shortDescription: { type: String },
  longDescription: { type: String },
  hasITunesExtras: { type: Boolean },
  userId: { type: Schema.Types.ObjectId, ref: "users", required: true },
});

FavoriteSchema.index({ trackId: 1 });

const Favorite = mongoose.model<IFavorites>("favorite", FavoriteSchema);
export default Favorite;
