const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
module.exports = {
    createUser: async (inputData) => {
        const passwordHash = bcrypt.hashSync(inputData.password, 10);
        const user = await userModel.create({
            name: inputData.name,
            email: inputData.email,
            user_type: inputData.user_type,
            assigned_ward: inputData.assigned_ward,
            password: passwordHash
        })
        return user;
    }
};