const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const VitalSchema = new Schema({
    gcs_e: { type: String },
    gcs_v: { type: String },
    gcs_m: { type: String },
    pr: { type: String },
    bp_min: { type: String },
    bp_max: { type: String },
    spo2: { type: String },
    respiratory_rate: { type: String },
    patient_relaxed: { type: Boolean },
}, {
    timestamps: true
})

const VentilationSchema = new Schema({
    room_air: { type: String },
    nrbm: { type: String },
    sfm: { type: String },
    nasal_cannula: { type: String },
    bipap_flow: { type: String },
    bipap_fio2: { type: String },
    bipap_support: { type: String },
    bipap_peep: { type: String },
    hfno_fio2: { type: String },
    hfno_support: { type: String },
    hfno_peep: { type: String },
    invasive_fio2: { type: String },
    invasive_support: { type: String },
    invasive_peep: { type: String },
    niv_fio2: { type: String },
    niv_support: { type: String },
    niv_peep: { type: String },
    niv_vt: { type: String },
})

const VitalsSchema = new Schema({
    patient_id: {
        type: Schema.Types.ObjectId, ref: 'Patients'
    },
    vitals: VitalSchema,
    ventilation: VentilationSchema
}, {
    timestamps: true
});


const Vitals = mongoose.model('vitals', VitalsSchema);

module.exports = Vitals;