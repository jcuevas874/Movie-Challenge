const { getMovieHandler } = require('./movieservice');
const { getMoviesHandler } = require('./moviesservice');
const { postMovieHandler } = require('./savemovieservice');

module.exports = {
    getMovieHandler,
    getMoviesHandler,
    postMovieHandler,
}