import userModel from '../../model/user.model.js';

const fetchUser = async (userName) => {
    const fetchedUser = await userModel.findOne({ userName }).lean();
    return fetchedUser;
}

const createUser = async (data) => {
    const created = await userModel.create(data);
    return created
}

export { fetchUser, createUser }