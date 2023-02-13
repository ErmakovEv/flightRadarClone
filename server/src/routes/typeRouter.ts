import express = require('express');
const router = express.Router();
import typeController from '../controllers/typeController';
import roleMiddleware from '../middleware/roleMiddleware';

router.post('/', roleMiddleware, typeController.create);
router.get('/', typeController.getAll);

export default router;
