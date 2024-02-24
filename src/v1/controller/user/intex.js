import { Router } from 'express';
const router = Router();
import validation from './user.validation.js';
import { userLogIn } from './user.controller.js';

//API Endpoints
router.post('/login', validation, userLogIn);

export default router;