const getMovies = require('./moviesroute');
const getMovie = require('./movieroute');
const postMovie = require('./savemovieroute');

module.exports = {
    getMovie,
    getMovies,
    postMovie
};