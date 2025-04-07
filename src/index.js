const Koa = require('koa');
const Router = require('koa-router');

const customerRouter = require('./routes/customer');
const { database } = require('./configs/database');

const PORT = 3000
const app = new Koa();
const router = new Router({ prefix: '/api' });

router.use('/v1/customers', customerRouter.routes(), customerRouter.allowedMethods());

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(PORT, async () => {
  console.log('Server started on port ' + PORT)
  try {
    await database.authenticate();
    await database.sync()
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});