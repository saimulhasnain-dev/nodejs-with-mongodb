const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient.controller');

router.post('/create', patientController.createPatient);

module.exports = router;
