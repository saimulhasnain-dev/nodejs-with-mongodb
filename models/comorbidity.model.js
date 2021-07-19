const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const STATUS = ["YES", "NO"];


const ComorbiditySchema = new Schema({
    diabetes: {
        type: STATUS,
        default: "NO"
    },
    hiv: {
        type: STATUS,
        default: "NO"
    },
    asthma: {
        type: STATUS,
        default: "NO"
    },
    organ_transplant: {
        type: STATUS,
        default: "NO"
    },
    malignancy: {
        type: STATUS,
        default: "NO"
    },
    renal_failure: {
        type: STATUS,
        default: "NO"
    },
    diabetes_year: {
        type: String,
    },
    diabetes_month: {
        type: String,
    },
    diabetes_days: {
        type: String,
    },
    diabetes_status: {
        type: String,
    },
    diabetes_type: {
        type: String,
    },
    diabetes_value: {
        type: String,
    },
    other: {
        type: String,
    },
    media_attachments: {
        type: String,
    },
}, {
    timestamps: true
}, {
    timestamps: true
});


const Comorbidity = mongoose.model('comorbidity', ComorbiditySchema);

module.exports = Comorbidity;