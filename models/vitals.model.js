const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const VitalsSchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId, ref: 'patients'
    },
    gcs_e: { type: Number },
    gcs_v: { type: Number },
    gcs_m: { type: Number },
    pr: { type: Number },
    bp_min: { type: Number },
    bp_max: { type: Number },
    spo2: { type: Number },
    respiratory_rate: { type: Number },
    patient_relaxed: { type: String },
}, {
    timestamps: true
});


const Vitals = mongoose.model('vitals', VitalsSchema);

module.exports = Vitals;