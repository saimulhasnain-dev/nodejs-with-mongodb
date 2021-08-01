const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const userAuth = require('../middleware/userAuth');

router.post('/create', userController.createUser);
router.post('/token', userController.getNewToken);
router.put('/change-password', userAuth, userController.changePassword);
router.post('/login', userController.login);
router.post('/notification-status', userAuth, userController.updateNotification);

module.exports = router;
