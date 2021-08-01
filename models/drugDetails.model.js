const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DrugDetailsSchema = new Schema({
    remedisvir: {
        type: String,
        default: "NO"
    },
    remedisvir_duration: {
        type: Number
    },
    tocilizumab: {
        type: String,
        default: "NO"
    },
    tocilizumab_duration: {
        type: Number
    },
    ventilation: {
        type: String,
        default: "NO"
    },
    ventilation_duration: {
        type: Number
    },
    o2: {
        type: String,
        default: "NO"
    },
    o2_duration: {
        type: Number
    },
    corticosteroids: {
        type: String,
        default: "NO"
    },
    corticosteroids_method: {
        type: String
    },
    dose: {
        type: String
    },
}, {
    timestamps: true
});


const DrugDetails = mongoose.model('drugDetails', DrugDetailsSchema);

module.exports = DrugDetails;