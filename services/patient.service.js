const differenceInYears = require('date-fns/differenceInYears');
const patientModel = require('../models/patient.model');

module.exports = {
    createPatient: async (inputData) => {
        const age = differenceInYears(new Date(), new Date(inputData.dob))
        inputData.age = age;
        const patient = await patientModel.create({
            ...inputData
        })
        return patient;
    }
};