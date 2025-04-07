const Router = require('koa-router');
const router = new Router();
const controller = require('../controllers/sales');
const { validateZodSchema } = require('../middleware/validate-schema');
const { CreateSalesSchema, GetAllSalesSchema } = require('../validation-schemas/sales');

router.get('/', validateZodSchema(GetAllSalesSchema), controller.getAllSales)
router.get('/:id', controller.getSalesById)
router.post('/', validateZodSchema(CreateSalesSchema), controller.createSales)
router.put('/', controller.updateSales)

module.exports = router