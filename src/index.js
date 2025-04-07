const Koa = require('koa');

const { koaBody } = require('koa-body');
const database = require('./configs/database');
const errorHandler = require('./middleware/error');
const mainRouter = require('./routes');

const PORT = 3000
const app = new Koa();

app.use(koaBody())
app.use(errorHandler)

app
  .use(mainRouter.routes())
  .use(mainRouter.allowedMethods())

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