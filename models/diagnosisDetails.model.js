const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiagnosisDetailsSchema = new Schema({
    diagnosis_note: {
        type: String,
        required: [true, 'Diagnosis is required']
    },
}, {
    timestamps: true
});

const DiagnosisDetails = mongoose.model('diagnosisDetails', DiagnosisDetailsSchema);

module.exports = DiagnosisDetails;