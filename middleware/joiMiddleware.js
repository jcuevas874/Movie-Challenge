const validSchema = require('../models/schemas');

const validInfo = () => (async(ctx, next) => {
        try {
            await validSchema.validateAsync(ctx.request.body); 
        } catch (error) {
            ctx.status = 400
            ctx.body = error;
            ctx.log.error(`There was an error: ${error.message}` );
            return ctx;
        };
        await next();
    });

module.exports = validInfo
