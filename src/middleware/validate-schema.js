const { ZodError } = require('zod')

module.exports.validateZodSchema = (schema) => async (ctx, next) => {
    try {
      ctx.request.body = await schema.parseAsync({
        ...ctx.request.body,
        ...ctx.request.query,
        ...ctx.params,
      });
      await next();
    } catch (error) {
      if (error instanceof ZodError) {
        ctx.status = 400;
        ctx.body = {
          message: 'Validation failed',
          errors: error.issues.map((issue) => ({
            ...issue,
            path: issue.path.join('.'),
          })),
        };
      } else {
        throw error
      }
    }
  };