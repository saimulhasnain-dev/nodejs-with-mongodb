const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patient.controller');
const userAuth = require('../middleware/userAuth');

router.post('/create', userAuth, patientController.createPatient);
router.get('/get-patient-detail/:_id', userAuth, patientController.getPatient);
router.post('/get-patients', userAuth, patientController.getPatients);
router.post('/add-advice', userAuth, patientController.addAdvice);
router.post('/get-advice', userAuth, patientController.getAdvice);
router.post('/add-critical-event', userAuth, patientController.addCriticalEvent);
router.post('/get-critical-event', userAuth, patientController.getCriticalEvent);
router.post('/add-vitals', userAuth, patientController.addVitals);
router.post('/get-vitals', userAuth, patientController.getVitals);
router.post('/add-ventilation', userAuth, patientController.addVentilation);
router.post('/get-ventilation', userAuth, patientController.getVentilation);
router.post('/add-feed', userAuth, patientController.addFeed);
router.post('/get-feed', userAuth, patientController.getFeed);
router.post('/add-biopsy', userAuth, patientController.addBiopsy);
router.get('/get-biopsy/:patient', userAuth, patientController.getBiopsy);
router.post('/add-diagnosis', userAuth, patientController.addDiagnosis);
router.get('/get-diagnosis/:patient', userAuth, patientController.getDiagnosis);
router.post('/add-mucor-details', userAuth, patientController.addMucorDetails);
router.get('/get-mucor-details/:patient', userAuth, patientController.getMucorDetails);
router.post('/add-ocular-details', userAuth, patientController.addOcularDetails);
router.get('/get-ocular-details/:patient', userAuth, patientController.getOcularDetails);
router.post('/add-procedure-details', userAuth, patientController.addProcedureDetails);
router.get('/get-procedure-details/:patient', userAuth, patientController.getProcedureDetails);
router.post('/add-comorbidity-details', userAuth, patientController.addComorbidityDetails);
router.get('/get-comorbidity-details/:patient', userAuth, patientController.getComorbidityDetails);
router.post('/add-rx', userAuth, patientController.addRx);
router.post('/get-rx', userAuth, patientController.getRx);


module.exports = router;
