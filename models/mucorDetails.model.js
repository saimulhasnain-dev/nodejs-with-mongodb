const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MucorDetailsSchema = new Schema({
    result: {
        type: String,
    },
    date_of_symptoms: {
        type: Date
    },
    nasal_stuffiness: { type: String },
    foul_smell: { type: String },
    epistaxis: { type: String },
    nasal_discharge: { type: String },
    nasal_mucosal: { type: String },
    facial_oedema: { type: String },
    facial_discoloration: { type: String },
    reginal_pain: { type: String },
    facial_pain: { type: String },
    worsening_headache: { type: String },
    proptosis: { type: String },
    loss_vision: { type: String },
    facial_paraesthesia: { type: String },
    sudden_ptosis: { type: String },
    ocular_motlilty: { type: String },
    facial_palsy: { type: String },
    action_taken: {
        type: String
    },
    ent_findings: {
        type: String
    },
    ent_media: {
        type: String
    },
    other_findings: {
        type: String
    },
    other_media: {
        type: String
    },
}, {
    timestamps: true
});

const MucorDetails = mongoose.model('mucorDetails', MucorDetailsSchema);

module.exports = MucorDetails;