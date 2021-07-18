const patientService = require('../services/patient.service');
const Joi = require('joi');
module.exports = {
    createPatient: async (req, res) => {
        try {
            const input = req.body;
            const personalDetailsSchema = Joi.object().keys({
                state: Joi.string().required(),
                city: Joi.string().required(),
                address: Joi.string().required(),
                area: Joi.string().required(),
                complete_address: Joi.string().required(),
                pin_code: Joi.string().required().min(5),
                mobile: Joi.string().required().min(10)
            }).required();
            const schema = Joi.object({
                name: Joi.string().required(),
                dob: Joi.string().required(),
                gender: Joi.string().required().valid("MALE", "FEMALE", "OTHER"),
                weight: Joi.string().required(),
                height: Joi.string().required(),
                personalDetails: personalDetailsSchema
            });

            const { error, value } = schema.validate(input);
            if (error) { res.status(500).send(error.message); return false; };
            const result = await patientService.createPatient(value);
            res.status(200).send(result);
        } catch (error) {
            console.log("Error in create patient", error)
            res.status(500).send(error.message)
        }
    }

};

