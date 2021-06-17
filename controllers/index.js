const { getMovieController } = require('./moviecontroller');
const { getMoviesController } = require('./moviescontroller');
const { postMoviesController } = require('./savemoviecontroller');

module.exports = {
    getMovieController,
    getMoviesController,
    postMoviesController,
}