const userService = require('../services/user.service');
const Joi = require('joi');
module.exports = {
    createUser: async (req, res) => {
        try {
            const input = req.body;
            const schema = Joi.object({
                name: Joi.string().required(),
                email: Joi.string().required().email(),
                mobile: Joi.number().required(),
                password: Joi.string().required(),
                assigned_ward: Joi.string().required(),
                device_token: Joi.string().required()
            });

            const { error, value } = schema.validate(input);
            if (error) {
                res.status(500).send(error.message);
                return false;
            };

            const result = await userService.createUser(value);
            res.status(200).send(result);

        } catch (error) {
            console.log("Error in create user", error)
            res.status(500).send(error.message)
        }
    }

};

