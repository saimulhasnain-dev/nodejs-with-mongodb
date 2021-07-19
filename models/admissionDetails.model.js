const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdmissionDetailsSchema = new Schema({
    doa: {
        type: Date,
        required: [true, 'Date of admission is required']
    },
    uhid: {
        type: String,
        required: [true, 'UHID is required']
    }
}, {
    timestamps: true
});

const AdmissionDetails = mongoose.model('admissionDetails', AdmissionDetailsSchema);

module.exports = AdmissionDetails;