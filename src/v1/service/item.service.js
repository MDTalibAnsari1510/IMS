import itemModel from '../../model/item.model.js';

const createItem = async (data) => {
    const created = await itemModel.create(data);
    return created
}

const fetchItemById = async (id) => {
    const fetched = await itemModel.findById(id).lean();
    return fetched;
}

const fetchAllItems = async (id) => {
    const fetchedAllItem = await itemModel.find().lean();
    return fetchedAllItem;
}

const updateItemById = async (id, data) => {
    const updatedData = await itemModel.findByIdAndUpdate({ _id: id }, data, { returnOriginal: false }).lean();
    return updatedData;
}

const deleteItemById = async (id) => {
    const deletedRecord = await itemModel.findByIdAndDelete(id).lean();
    return deletedRecord;
}

export { createItem, fetchItemById, fetchAllItems, updateItemById, deleteItemById }