const Koa = require('koa');
const Router = require('koa-router');

const customerRouter = require('./routes/customer');

const PORT = 3000
const app = new Koa();
const router = new Router({ prefix: '/api' });

router.use('/v1/customers', customerRouter.routes(), customerRouter.allowedMethods());

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(PORT, () => console.log('Server started on port ' + PORT));