const Router = require('express')
const router = Router();
const controller = require('./controller');
const mid = require('./middleware')
const midRole = require('./roleMiddleware')

router.post('/reg', controller.registration)
router.post('/log', controller.login)
router.get('/users', midRole, controller.getUsers)

module.exports = router;