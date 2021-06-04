require('dotenv').config(); 
require('./connection');
const Koa = require("koa");
const Router = require("koa-router");
const axios = require("axios").default;
const mongoose = require('mongoose');
const Movie = require('./models/movies');


const app = new Koa();
const router = new Router();
const url = process.env.URL;
const apikey = process.env.APIKEY;
const uri = process.env.URI;

mongoose.set('useCreateIndex', true);

router.get("/:movie", async ctx => { // /: Nos permite agregar en el link la pelicula a buscar, Funcion Asincrona y ctx nos permite hacer el res y el req.
    const res = await axios.get(url, { //axios Permite solicitar la url y colocar los parametros en un objeto y await espera la respuesta de la solicitud.
        params: { t: ctx.request.params.movie, apikey, y: ctx.header.year }, //parametros solicitados, nombre de la pelicula, apikey y el ano que puedes solicitar.
    });
    if (res.data.Response === "False") {
        ctx.body = res.data;
        console.log("Movie does not exist!");
    }
    else {const { Title, Year, Released, Genre, Director, Actors, Plot, Ratings } = //desestructuracion para que nos muestra solo la informacion que requerimos.
        res.data;
    const findMovie = await Movie.findOne({Title, Year});
    if (findMovie === null) {
        const movie = new Movie({ Title, Year, Released, Genre, Director, Actors, Plot, Ratings }); //solicitar cada uno de los datos que nos interesan.
        const result = await movie.save();
        ctx.body = result._doc;
        console.log("Movie saved succesfully!!");
    }
    else {
        ctx.body = findMovie._doc;
        console.log("Movie already exist in our database!");
    }
    
    }
});

router.get("/", async ctx => {
    const limit = parseInt(ctx.header.limit, 5) || 5;
    const page = parseInt(ctx.header.page, 5) || 1;
    const findAllMovies = await Movie.paginate({}, {limit, page});
    ctx.body = findAllMovies;
})

router.post("/", async ctx => { // Nos permite postear en el plot de la pelicula solicitada en el post.
    const {movie, find, replace} = ctx.request.body; //desestructuracion de lo que queremos solicitar, buscar y reemplazar.
    const res = await axios.get(url, {
        params: { t: movie, apikey, y: ctx.header.year },
    });
    const { Plot } = res.data;
    const plotMod = Plot.replace(find, replace); 
    ctx.body = plotMod;
})

app
    .use(require("koa-body")())
    .use(router.allowedMethods())
    .use(router.routes());

app.listen(5000, () => {
    console.log("App is running");
});