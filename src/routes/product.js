const Router = require('koa-router');
const router = new Router();
const controller = require('../controllers/product')

router.get('/', controller.getAllProducts)
router.get('/:id', controller.getProductById)
router.post('/', controller.createProduct)
router.put('/', controller.updateProduct)

module.exports = router