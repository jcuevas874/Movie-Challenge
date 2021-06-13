const { getMovieHandler } = require('../services')
const getMovieController = ctx => getMovieHandler(ctx); 

  module.exports = { getMovieController }