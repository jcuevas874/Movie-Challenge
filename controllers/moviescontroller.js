const { getMoviesHandler } = require('../services')
const getMoviesController = ctx => getMoviesHandler(ctx); 

  module.exports = { getMoviesController };