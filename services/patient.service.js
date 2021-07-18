const patientModel = require('../models/patient.model');
module.exports = {
    createPatient: async (inputData) => {
        const user = await patientModel.create({
            ...inputData
        })
        return user;
    }
};