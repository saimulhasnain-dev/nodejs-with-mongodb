const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VentilationSchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId, ref: 'patients'
    },
    room_air: { type: Number },
    nrbm: { type: Number },
    sfm: { type: Number },
    nasal_cannula: { type: Number },
    bipap_flow: { type: Number },
    bipap_fio2: { type: Number },
    bipap_support: { type: String },
    bipap_peep: { type: Number },
    hfno_fio2: { type: Number },
    hfno_support: { type: String },
    hfno_peep: { type: Number },
    invasive_fio2: { type: Number },
    invasive_support: { type: String },
    invasive_peep: { type: Number },
    niv_fio2: { type: Number },
    niv_support: { type: String },
    niv_peep: { type: Number },
    niv_vt: { type: Number },
}, {
    timestamps: true
});


const Ventilation = mongoose.model('ventilation', VentilationSchema);

module.exports = Ventilation;