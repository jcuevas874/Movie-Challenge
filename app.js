require("dotenv").config();
require("./connection");
const Koa = require("koa");
const logger = require('koa-pino-logger');
const validInfo = require("./middleware");
const { getMovie, getMovies, postMovie } = require("./routes");
const app = new Koa();
const log = logger();

app
  .use(logger())
  .use(require("koa-body")())
  .use(validInfo())
  .use(getMovie.allowedMethods())
  .use(getMovie.routes())
  .use(getMovies.allowedMethods())
  .use(getMovies.routes())
  .use(postMovie.allowedMethods())
  .use(postMovie.routes())
  
app.listen(process.env.PORT, () => {
  console.log(`App is running in port: ${process.env.PORT}` );
});
