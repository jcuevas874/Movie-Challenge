const Joi = require('joi');

const validSchema = Joi.object({
    movie: Joi.string(),
    find: Joi.string(),
    replace: Joi.string(),
    });

module.exports = validSchema;