import { body } from 'express-validator';

const userValidationSchema = [
    body('userName').notEmpty().withMessage('userName is required.')
        .isLength({ min: 5 }).withMessage('userName must be at least 5 characters long.')
        .isString().withMessage('userName must be contain string'),

    body('password').notEmpty().withMessage('password is required.')
]

export default userValidationSchema;

