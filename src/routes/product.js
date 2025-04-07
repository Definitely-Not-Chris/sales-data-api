const Router = require('koa-router');
const router = new Router();
const controller = require('../controllers/product');
const { validateZodSchema } = require('../middleware/validate-schema');
const { CreateProductSchema } = require('../validation-schemas/product');

router.get('/', controller.getAllProducts)
router.get('/:id', controller.getProductById)
router.post('/', validateZodSchema(CreateProductSchema), controller.createProduct)
router.put('/', controller.updateProduct)

module.exports = router