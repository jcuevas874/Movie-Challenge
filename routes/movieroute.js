const Router = require("koa-router");
const router = new Router();
const { getMovieController } = require('../controllers');

router.get("/:movie", getMovieController);

module.exports = router