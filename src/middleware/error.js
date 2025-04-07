

const errorHandler = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        console.error('An error occurred:', err);
        ctx.status = err.statusCode || 500;
        ctx.body = { error: err.message || 'Internal Server Error' };
    }
}

module.exports = errorHandler