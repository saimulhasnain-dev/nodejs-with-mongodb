const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const rxSchema = new Schema({
    drug_type: {
        type: String,
    },
    drug_name: {
        type: String,
    },
    drug_route: {
        type: String,
    },
    drug_dose: {
        type: String,
    },
    drug_frequency: {
        type: String,
    },
    drug_start_date: {
        type: Date,
    },
    drug_end_date: {
        type: Date,
    },
    instructions: {
        type: String,
    },
    media: {
        type: String,
    },
    drug_status: {
        type: String,
        default: "STARTED"
    },
}, {
    timestamps: true
});

const RxHistorySchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId, ref: 'patients'
    },
    anti_biotics: rxSchema,
    anti_fungal: rxSchema,
    anti_coagulation: rxSchema,
    steroids: rxSchema,
    insulin: rxSchema,
    infusion: rxSchema,
    base_line_fluid: rxSchema,
    experimental_treatment: rxSchema,
    other_drug: rxSchema,

}, {
    timestamps: true
});


const RxHistory = mongoose.model('rxHistory', RxHistorySchema);

module.exports = RxHistory;