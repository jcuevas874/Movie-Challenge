const mongoose = require("mongoose");
const Movie = require("../models/movies");
mongoose.set("useCreateIndex", true);
const url = process.env.URL;
const apikey = process.env.APIKEY;

const getMoviesHandler = async (ctx) => {
  const limit = Number(ctx.header.limit) || 5;
  const page = Number(ctx.header.page) || 1;
  const findAllMovies = await Movie.paginate({}, { limit, page });

  ctx.body = findAllMovies;
};

module.exports = { getMoviesHandler };
