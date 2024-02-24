import { Schema, model } from 'mongoose';
const itemSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
}, {
    timestamps: true
});

export default model('item', itemSchema);;