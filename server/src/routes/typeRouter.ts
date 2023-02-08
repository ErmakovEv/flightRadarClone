import express = require('express');
const router = express.Router();
import typeController from '../controllers/typeController';

router.post('/', typeController.create);
router.get('/', typeController.getAll);

export default router;
