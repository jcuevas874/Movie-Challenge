const axios = require("axios").default;
const mongoose = require("mongoose");
const Movie = require("../models/movies");
const url = process.env.URL;
const apikey = process.env.APIKEY;

mongoose.set("useCreateIndex", true);

const getMovieHandler = async (ctx) => {
  // /: Nos permite agregar en el link la pelicula a buscar, Funcion Asincrona y ctx nos permite hacer el res y el req.
  const res = await axios.get(url, {
    //axios Permite solicitar la url y colocar los parametros en un objeto y await espera la respuesta de la solicitud.
    params: { t: ctx.request.params.movie, apikey, y: ctx.header.year }, //parametros solicitados, nombre de la pelicula, apikey y el ano que puedes solicitar.
  });
  if (res.data.Response === "False") {
    ctx.body = res.data;
    ctx.log.info("Movie does not exist!");
  } else {
    const { Title, Year, Released, Genre, Director, Actors, Plot, Ratings } =
      res.data; //desestructuracion para que nos muestra solo la informacion que requerimos.
    const findMovie = await Movie.findOne({ Title: Title.toLowerCase(), Year });
    if (findMovie === null) {
      const movie = new Movie({
        Title: Title.toLowerCase(),
        Year,
        Released,
        Genre,
        Director,
        Actors,
        Plot,
        Ratings,
      }); //solicitar cada uno de los datos que nos interesan.
      const result = await movie.save();
      ctx.log.info("Movie saved succesfully!!");
      ctx.body = result._doc;
    } else {
      ctx.log.info("Movie already exist in our database!");
      ctx.body = findMovie._doc;
    }
  }
};

module.exports = { getMovieHandler };
