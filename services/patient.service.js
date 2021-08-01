const { differenceInYears, differenceInCalendarDays } = require('date-fns');
const patientModel = require('../models/patient.model');
const adviceModel = require('../models/patientAdvice.model');
const criticalEventModel = require('../models/criticalEvent.model');
const vitalModel = require('../models/vitals.model');
const ventilationModel = require('../models/ventilation.model');
const feedModel = require('../models/feed.model');
const rxModel = require('../models/rxHistory.model');
module.exports = {
    createPatient: async (inputData) => {
        const age = differenceInYears(new Date(), new Date(inputData.dob))
        inputData.age = age;
        const patient = await patientModel.create({
            ...inputData
        })
        return patient;
    },
    getPatient: async (patientId) => {
        const patient = await patientModel.findById(patientId)
            .populate("attended", ["name", "email"])
        const admissionDuration = differenceInCalendarDays(new Date(), new Date(patient?.createdAt));
        return { ...patient._doc, admissionDuration };
    },
    getPatients: async (inputData) => {
        const skippedItems = (inputData.page - 1) * inputData.limit;
        const total_count = await patientModel.find({ assigned_ward: inputData.assigned_ward }).count();
        const patients = await patientModel.find({ assigned_ward: inputData.assigned_ward })
            .populate("attended", ["name", "email"])
            .skip(skippedItems)
            .limit(inputData.limit)
            .sort({ createdAt: 'descending' });
        return { patients, total_count, limit: inputData.limit, page: inputData.page };
    },
    addAdvice: async (inputData) => {
        const patient = await adviceModel.create({
            ...inputData
        })
        return patient;
    },
    getAdvice: async (inputData) => {
        const skippedItems = (inputData.page - 1) * inputData.limit;
        const total_count = await adviceModel.find({ patient: inputData.patient }).count();
        const advices = await adviceModel.find({
            patient: inputData.patient
        }).skip(skippedItems)
            .limit(inputData.limit)
            .sort({ createdAt: 'descending' });
        return { advices, total_count, limit: inputData.limit, page: inputData.page };
    },
    addCriticalEvent: async (inputData) => {
        const patient = await criticalEventModel.create({
            ...inputData
        })
        return patient;
    },
    getCriticalEvent: async (inputData) => {
        const skippedItems = (inputData.page - 1) * inputData.limit;
        const total_count = await criticalEventModel.find({ patient: inputData.patient }).count();

        const events = await criticalEventModel.find({
            patient: inputData.patient
        }).skip(skippedItems)
            .limit(inputData.limit)
            .sort({ createdAt: 'descending' });
        return { events, total_count, limit: inputData.limit, page: inputData.page };
    },
    addVitals: async (inputData) => {
        const patient = await vitalModel.create({
            ...inputData
        })
        return patient;
    },
    getVitals: async (inputData) => {
        const skippedItems = (inputData.page - 1) * inputData.limit;
        const total_count = await vitalModel.find({ patient: inputData.patient }).count();

        const vitals = await vitalModel.find({
            patient: inputData.patient
        }).skip(skippedItems)
            .limit(inputData.limit)
            .sort({ createdAt: 'descending' });
        return { vitals, total_count, limit: inputData.limit, page: inputData.page };
    },
    addVentilation: async (inputData) => {
        const patient = await ventilationModel.create({
            ...inputData
        })
        return patient;
    },
    getVentilation: async (inputData) => {
        const skippedItems = (inputData.page - 1) * inputData.limit;
        const total_count = await ventilationModel.find({ patient: inputData.patient }).count();

        const ventilators = await ventilationModel.find({
            patient: inputData.patient
        }).skip(skippedItems)
            .limit(inputData.limit)
            .sort({ createdAt: 'descending' });
        return { ventilators, total_count, limit: inputData.limit, page: inputData.page };
    },
    addFeed: async (inputData) => {
        const patient = await feedModel.create({
            ...inputData
        })
        return patient;
    },
    getFeed: async (inputData) => {
        const skippedItems = (inputData.page - 1) * inputData.limit;
        const total_count = await feedModel.find({ patient: inputData.patient }).count();

        const feeds = await feedModel.find({
            patient: inputData.patient
        }).skip(skippedItems)
            .limit(inputData.limit)
            .sort({ createdAt: 'descending' });
        return { feeds, total_count, limit: inputData.limit, page: inputData.page };
    },
    addBiopsy: async (inputData) => {
        let payload = { status: inputData.status, result: inputData.result, media_attachment: inputData.media_attachment };
        const patient = await patientModel.findByIdAndUpdate(
            { _id: inputData.patient },
            { $push: { biopsy: payload } })
        return patient;
    },
    getBiopsy: async (inputData) => {
        const biopsy = await patientModel.findById({
            _id: inputData.patient
        }).select("biopsy")

        return biopsy;
    },
    addDiagnosis: async (inputData) => {
        let payload = { diagnosis_note: inputData.diagnosis_note };
        const patient = await patientModel.findByIdAndUpdate(
            { _id: inputData.patient },
            { $push: { diagnosisDetails: payload } })
        return patient;
    },
    getDiagnosis: async (inputData) => {

        const diagnosis = await patientModel.findById({
            _id: inputData.patient
        }).select("diagnosisDetails")
        return diagnosis;
    },
    addMucorDetails: async (inputData, _id) => {
        let payload = { ...inputData };
        const patient = await patientModel.findByIdAndUpdate(
            { _id },
            { $push: { mucorDetails: payload } })
        return patient;
    },
    getMucorDetails: async (inputData) => {

        const mucor = await patientModel.findById({
            _id: inputData.patient
        }).select("mucorDetails")
        return mucor;
    },
    addOcularDetails: async (inputData, _id) => {
        let payload = { ...inputData };
        const ocular = await patientModel.findByIdAndUpdate(
            { _id },
            { $push: { ocularFindings: payload } })
        return ocular;
    },
    getOcularDetails: async (inputData) => {

        const ocular = await patientModel.findById({
            _id: inputData.patient
        }).select("ocularFindings")
        return ocular;
    },
    addProcedureDetails: async (inputData, _id) => {
        let payload = { ...inputData };
        const ocular = await patientModel.findByIdAndUpdate(
            { _id },
            { $push: { procedureDone: payload } })
        return ocular;
    },
    getProcedureDetails: async (inputData) => {

        const ocular = await patientModel.findById({
            _id: inputData.patient
        }).select("procedureDone")
        return ocular;
    },
    addComorbidityDetails: async (inputData, _id) => {
        let payload = { ...inputData };
        const ocular = await patientModel.findByIdAndUpdate(
            { _id },
            { $push: { comorbidity: payload } })
        return ocular;
    },
    getComorbidityDetails: async (inputData) => {

        const ocular = await patientModel.findById({
            _id: inputData.patient
        }).select("comorbidity")
        return ocular;
    },
    addRx: async (inputData) => {
        const rx = await rxModel.create({
            ...inputData
        })
        return rx;
    },
    getRx: async (inputData) => {
        const skippedItems = (inputData.page - 1) * inputData.limit;
        const total_count = await rxModel.find({ patient: inputData.patient }).count();

        const rx = await rxModel.find({
            patient: inputData.patient
        }).skip(skippedItems)
            .limit(inputData.limit)
            .sort({ createdAt: 'descending' });
        return { rx, total_count, limit: inputData.limit, page: inputData.page };
    },
}