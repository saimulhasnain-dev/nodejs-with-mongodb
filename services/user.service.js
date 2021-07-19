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
    }
};