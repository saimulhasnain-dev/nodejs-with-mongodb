const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GENDER = ["MALE", "FEMALE", "OTHER"]

const PersonalDetails = {
    state: {
        type: String,
        required: [true, 'State is required']
    },
    city: {
        type: String,
        required: [true, 'City is required']
    },
    address: {
        type: String,
        required: [true, 'Address is required']
    },
    area: {
        type: String,
        required: [true, 'Area is required']
    },
    complete_address: {
        type: String,
        required: [true, 'Complete Address is required']
    },
    pin_code: {
        type: String,
        required: [true, 'Pin code is required']
    },
    mobile: {
        type: String,
        required: [true, 'Mobile is required']
    },
};

const AdmissionDetails = {
    doa: {
        type: String,
        required: [true, 'Date of admission is required']
    },
    uhid: {
        type: String,
        required: [true, 'UHID is required']
    }
}

const Diagnosis = {
    diagnosis_note: {
        type: String,
        // required: [true, 'Name is required']
    },
}
const PatientSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    dob: {
        type: String,
        required: [true, 'DOB is required']
    },
    gender: {
        type: String,
        required: [true, 'Gender is required'],
        enum: GENDER,

    },
    weight: {
        type: String,
        required: [true, 'Weight is required']
    },
    height: {
        type: String,
        required: [true, 'Height is required']
    },
    personalDetails: PersonalDetails,
    admissionDetails: [AdmissionDetails],
    diagnosis: [Diagnosis],
}, {
    timestamps: true
});


const Patient = mongoose.model('patient', PatientSchema);

module.exports = Patient;