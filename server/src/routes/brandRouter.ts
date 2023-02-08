import express = require('express');
const router = express.Router();
import brandController from '../controllers/brandController';

router.post('/', brandController.create);
router.get('/', brandController.getAll);

export default router;
