const { postMovieHandler } = require('../services')
const postMoviesController = ctx => postMovieHandler(ctx); 

  module.exports = { postMoviesController };