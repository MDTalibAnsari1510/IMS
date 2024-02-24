import { body, check } from 'express-validator';

const createValidationSchema = [
    body('name').notEmpty().withMessage('Item {name} is required.')
        .isLength({ min: 3 }).withMessage('name must be at least 3 characters long.')
        .isString().withMessage('name must be contain string'),
]

const getValidateSchema = [
    check('id').isMongoId().withMessage('Invalid id'),
];

export { createValidationSchema, getValidateSchema };

