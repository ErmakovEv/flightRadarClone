import express = require('express');
const router = express.Router();

import deviceRouter from './deviceRouter';
import brandRouter from './brandRouter';
import typeRouter from './typeRouter';
import userRouter from './userRouter';

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);

export default router;
