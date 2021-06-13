const mongoose = require("mongoose");
const Movie = require("../models/movies");
mongoose.set("useCreateIndex", true);

const postMovieHandler = async (ctx) => {
  const { movie, find, replace } = ctx.request.body; //desestructuracion de lo que queremos solicitar, buscar y reemplazar.
  const year = ctx.header.year;
  const findMovie = await Movie.findOne({
    Title: movie.toLowerCase(),
    Year: year,
  });
  if (findMovie === null) {
    ctx.status = 400;
    ctx.body = "Movie doesn't exist";
    return ctx;
  }

  const { Plot } = findMovie._doc;
  const plotMod = Plot.replace(find, replace);
  try {
    const result = await Movie.updateOne(findMovie._doc, { Plot: plotMod });
    if (result.ok === 1) {
      ctx.body = plotMod;
    }
  } catch (error) {
    ctx.body = error.message;
  }
  return ctx;
};
module.exports = { postMovieHandler };
