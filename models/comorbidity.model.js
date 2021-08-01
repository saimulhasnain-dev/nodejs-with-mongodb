const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComorbiditySchema = new Schema({
    diabetes: {
        type: String,
        default: "NO"
    },
    hiv: {
        type: String,
        default: "NO"
    },
    asthma: {
        type: String,
        default: "NO"
    },
    organ_transplant: {
        type: String,
        default: "NO"
    },
    malignancy: {
        type: String,
        default: "NO"
    },
    renal_failure: {
        type: String,
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
    diabetes_String: {
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
    immunosuppressants: {
        type: String
    }
}, {
    timestamps: true
}, {
    timestamps: true
});


const Comorbidity = mongoose.model('comorbidity', ComorbiditySchema);

module.exports = Comorbidity;