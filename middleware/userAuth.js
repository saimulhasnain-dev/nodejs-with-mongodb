const jwt = require('jsonwebtoken');
const makeResponse = require('../utils/response.util');
const userService = require('../services/user.service');

module.exports = async (req, res, next) => {
    try {
        // const JWT_SECRET = process.env.JWT_SECRET;
        // const token = req.headers.authorization.split(' ')[1];
        // const decodedToken = jwt.verify(token, JWT_SECRET);
        // const userId = decodedToken.userId;
        // const user = await userService.getUser(userId);
        // if (!user)
        //     makeResponse.errorResponse(res, 'Invalid user!', 401);
        // if (user.sos)
        //     makeResponse.errorResponse(res, 'Invalid request!', 401);
        // if (user.status != 'ACTIVE')
        //     makeResponse.errorResponse(res, 'Invalid user!', 401);
        next();
    } catch (error) {
        console.log("Error in middleware", error.message)
        makeResponse.errorResponse(res, error.message);
    }
};