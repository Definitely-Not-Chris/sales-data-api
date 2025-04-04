const Router = require('koa-router');
const router = new Router();

router.get('/', (ctx) => {
    ctx.body = [
        { firstName: "John", lastName: "Doe" }
    ]
})

module.exports = router