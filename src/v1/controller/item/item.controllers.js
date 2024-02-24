import { createItem, fetchAllItems, fetchItemById, updateItemById, deleteItemById } from '../../service/item.service.js';
import { validationResult } from 'express-validator';

// Item create 
const creataItem = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }

        const createItemObj = {
            name: req.body.name,
            description: req.body.description
        }
        const createdItem = await createItem(createItemObj);
        if (!createdItem) {
            return res.status(400).json({
                success: false,
                message: 'Item is not create'
            });
        } else {
            return res.status(200).json({
                success: true,
                data: createdItem,
                message: 'Item created successfully',
            });
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: JSON.stringify(err)
        });
    }
}

// Get All items
const fetchAll = async (req, res) => {
    try {
        const fetched = await fetchAllItems();
        if (fetched.length > 0) {
            return res.status(200).json({
                success: true,
                data: fetched,
                message: 'All item fetched successfully',
            });
        } else {
            return res.status(404).json({
                success: false,
                data: fetched,
                message: 'Items not found',
            });
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: JSON.stringify(err)
        });
    }
}

//Get item by id
const fetchById = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }
        const id = req.params.id
        const getItem = await fetchItemById(id);
        if (getItem) {
            return res.status(200).json({
                success: true,
                data: getItem,
                message: 'Get item successfully',
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'Record not found',
            });
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: JSON.stringify(err)
        });
    }
}

//Update item by id
const updateById = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }
        const id = req.params.id
        const updateData = req.body;
        const updated = await updateItemById(id, updateData);
        if (updated) {
            return res.status(200).json({
                success: true,
                data: updated,
                message: 'Updated successfully',
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'Record not found for update',
            });
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: JSON.stringify(err)
        });
    }
}

//Delete item by id
const deleteById = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }
        const id = req.params.id
        const deleted = await deleteItemById(id);
        if (deleted) {
            return res.status(200).json({
                success: true,
                data: deleted,
                message: 'deleted successfully',
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'Record not found for delete',
            });
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: JSON.stringify(err)
        });
    }
}

export { creataItem, fetchAll, fetchById, updateById, deleteById }