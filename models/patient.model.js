const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GENDER = ["MALE", "FEMALE", "OTHER"];
const ContactDetails = require('./contactDetails.model').schema;
const AdmissionDetails = require('./admissionDetails.model').schema;
const DiagnosisDetails = require('./diagnosisDetails.model').schema;
const CovidDetails = require('./covidDetails.model').schema;
const MucorDetails = require('./mucorDetails.model').schema;
const OcularFindings = require('./ocularFindings.model').schema;
const ImagingDetail = require('./imagingDetails.model').schema;
const Comorbidity = require('./comorbidity.model').schema;
const ProcedureDone = require('./procedureDone.model').schema;
const Biopsy = require('./biopsy.model').schema;


const PatientsSchema = new Schema({
    assigned_ward: {
        type: String,
        required: [true, 'Name is required']
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    dob: {
        type: String,
        required: [true, 'DOB is required']
    },
    age: {
        type: Number,
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
    ContactDetails: ContactDetails,
    admissionDetails: [AdmissionDetails],
    diagnosisDetails: [DiagnosisDetails],
    covidDetails: [CovidDetails],
    mucorDetails: [MucorDetails],
    ocularFindings: [OcularFindings],
    imagingDetails: [ImagingDetail],
    comorbidity: [Comorbidity],
    procedureDone: [ProcedureDone],
    biopsy: [Biopsy],
    attended: { type: Schema.Types.ObjectId, ref: 'users' }

}, {
    timestamps: true
});


const Patients = mongoose.model('patients', PatientsSchema);

module.exports = Patients;