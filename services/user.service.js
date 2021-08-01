const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
module.exports = {
    createUser: async (inputData) => {
        const passwordHash = bcrypt.hashSync(inputData.password, 10);
        delete inputData.password;
        const user = await userModel.create({
            ...inputData,
            password: passwordHash
        })
        return user;
    },
    getUserById: async (userId) => {
        const user = await userModel.findById(userId);
        return user;
    },
    getUserByFields: async (fields) => {
        const user = await userModel.findOne({ ...fields });
        return user;
    },
    updateUser: async (userId, data) => {
        const user = await userModel.findByIdAndUpdate(userId, data);
        return user;
    }
};