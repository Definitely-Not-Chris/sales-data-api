
const Router = require('koa-router');
const router = new Router({ prefix: '/api' });

const customerRouter = require('./customer');
const productRouter = require('./product');
const salesRouter = require('./sales');

router.use('/v1/customers', customerRouter.routes(), customerRouter.allowedMethods());
router.use('/v1/products', productRouter.routes(), productRouter.allowedMethods());
router.use('/v1/sales', salesRouter.routes(), salesRouter.allowedMethods());


module.exports = router