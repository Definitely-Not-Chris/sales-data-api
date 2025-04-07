const Router = require('koa-router');
const router = new Router();
const controller = require('../controllers/customer')

router.get('/', controller.getAllCustomers)
router.get('/:id', controller.getCustomerById)
router.post('/', controller.createCustomer)
router.put('/', controller.updateCustomer)

module.exports = router