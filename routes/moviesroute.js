const Router = require("koa-router");
const router = new Router();
const { getMoviesController } = require('../controllers');

router.get("/", getMoviesController);

module.exports = router