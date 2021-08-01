const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientAdviceSchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId, ref: 'patients'
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