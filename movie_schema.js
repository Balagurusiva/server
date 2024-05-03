 import { Schema } from "mongoose";
 import mongoose from "mongoose"; 

const movieSchema = new Schema({
  rank: Number,
  title: String,
  description: String,
  image: String,
  big_image: String,
  genre: [String],
  thumbnail: String,
  rating: Number,
  id: String,
  year: Number,
  imdbid: String,
  imdb_link: String
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie
