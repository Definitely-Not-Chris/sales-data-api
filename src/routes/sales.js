const Router = require('koa-router');
const router = new Router();
const controller = require('../controllers/sales')

router.get('/', controller.getAllSales)
router.get('/:id', controller.getSalesById)
router.post('/', controller.createSales)
router.put('/', controller.updateSales)

module.exports = router