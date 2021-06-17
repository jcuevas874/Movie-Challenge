const Router = require("koa-router");
const router = new Router();
const axios = require("axios").default;
const { postMoviesController } = require("../controllers")

router.post("/", postMoviesController);

  module.exports = router;