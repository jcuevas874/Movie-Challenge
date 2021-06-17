const mongoosePaginate = require('mongoose-paginate-v2');
const { Schema, model } = require("mongoose");

const moviesSchema = new Schema({
  Title: String,
  Year: String,
  Released: String,
  Genre: String,
  Director: String,
  Actors: String,
  Plot: String,
  Ratings: Array,
});
moviesSchema.plugin(mongoosePaginate);

module.exports = model("movie", moviesSchema);
