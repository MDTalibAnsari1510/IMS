import { Router } from 'express';
const router = Router();
import { verifyToken } from '../../config/jwt.verify.js';
import { errorMidlleware } from '../../config/error.handle.js';
import itemRoute from './controller/item/index.js';
import userRoute from './controller/user/intex.js';

//API_routes
router.use('/user', errorMidlleware, userRoute);
router.use('/item', verifyToken, errorMidlleware, itemRoute);


export default router