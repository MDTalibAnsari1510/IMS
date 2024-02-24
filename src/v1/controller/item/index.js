import { Router } from 'express';
const router = Router();
import { createValidationSchema, getValidateSchema } from './item.validation.js';
import { creataItem, fetchAll, fetchById, updateById, deleteById } from './item.controllers.js';

//API Endpoints
router.post('/create', createValidationSchema, creataItem);
router.get('/fetchall', fetchAll);
router.get('/:id', getValidateSchema, fetchById);
router.put('/update/:id', getValidateSchema, updateById);
router.delete('/delete/:id', getValidateSchema, deleteById);


export default router;