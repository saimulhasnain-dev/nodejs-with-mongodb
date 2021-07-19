const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientAdviceSchema = new Schema({
    patient_id: {
        type: Schema.Types.ObjectId, ref: 'Patients'
    },
    advice: {
        type: String,
    },
    advice_media: {
        type: String
    }
}, {
    timestamps: true
});


const PatientAdvice = mongoose.model('patientAdvice', PatientAdviceSchema);

module.exports = PatientAdvice;