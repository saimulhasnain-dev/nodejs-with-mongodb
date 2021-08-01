const userService = require('../services/user.service');
const Joi = require('joi');
const makeResponse = require('../utils/response.util');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
    createUser: async (req, res) => {
        try {
            const input = req.body;
            const schema = Joi.object({
                name: Joi.string().required(),
                email: Joi.string().required().email(),
                mobile: Joi.number().required(),
                password: Joi.string().required().min(5),
                assigned_ward: Joi.string().required(),
                device_token: Joi.string().optional()
            });

            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await userService.createUser(value);
            delete result._doc.password;
            makeResponse.sendResponse(res, result);
        } catch (error) {
            console.log("Error in createUser", error.message)
            makeResponse.errorResponse(res, error.message);
        }
    },
    getNewToken: async (req, res) => {
        try {
            const JWT_SECRET = process.env.JWT_SECRET;
            const input = req.body;
            const schema = Joi.object({
                jwt_token: Joi.string().required(),
                _id: Joi.string().required(),
            });

            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await userService.getUserByFields(value);
            if (!result)
                makeResponse.errorResponse(res, 'Invalid user!!!');
            const jwt_token = jwt.sign({ userId: result._id }, JWT_SECRET, { expiresIn: "2h" });
            await userService.updateUser(result._id, { jwt_token })
            makeResponse.sendResponse(res, { ...result._doc, jwt_token });
        } catch (error) {
            console.log("Error in getNewToken", error.message)
            makeResponse.errorResponse(res, error.message);
        }
    },
    changePassword: async (req, res) => {
        try {
            const input = req.body;
            const schema = Joi.object({
                _id: Joi.string().required(),
                old_password: Joi.string().required().min(5),
                password: Joi.string().required().min(5),
            });

            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await userService.getUserById(value._id);
            if (!result)
                makeResponse.errorResponse(res, 'Invalid user!!!');
            const isValid = bcrypt.compareSync(value.old_password, result.password);
            if (!isValid)
                makeResponse.errorResponse(res, 'Incorrect password');
            const password = bcrypt.hashSync(value.password, 10);
            await userService.updateUser(result._id, { password });
            delete result._doc.password;
            makeResponse.sendResponse(res, result);
        } catch (error) {
            console.log("Error in changePassword", error.message)
            makeResponse.errorResponse(res, error.message);
        }
    },
    updateNotification: async (req, res) => {
        try {
            const input = req.body;
            const schema = Joi.object({
                _id: Joi.string().required(),
                notification_status: Joi.string().required().valid("ON", "OFF"),
            });

            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };

            const user = await userService.updateUser(value._id, { notification_status: value.notification_status });
            makeResponse.sendResponse(res, user);
        } catch (error) {
            console.log("Error in updateNotification", error.message)
            makeResponse.errorResponse(res, error.message);
        }
    },
    login: async (req, res) => {
        try {
            const input = req.body;
            const schema = Joi.object({
                email: Joi.string().email().required(),
                password: Joi.string().required().min(5),
            });

            const { error, value } = schema.validate(input);
            if (error) {
                makeResponse.errorResponse(res, error.message);
                return false;
            };
            const result = await userService.getUserByFields({ email: value.email });
            if (!result)
                makeResponse.errorResponse(res, 'Invalid email or password!!!');
            const isValid = bcrypt.compareSync(value.password, result.password);
            if (!isValid)
                makeResponse.errorResponse(res, 'Incorrect email or password!!!');
            const jwt_token = jwt.sign({ userId: result._id }, JWT_SECRET, { expiresIn: "2h" });
            await userService.updateUser(result._id, { jwt_token })
            delete result._doc.password;
            makeResponse.sendResponse(res, { ...result._doc, jwt_token });
        } catch (error) {
            console.log("Error in login", error.message)
            makeResponse.errorResponse(res, error.message);
        }
    },

};

