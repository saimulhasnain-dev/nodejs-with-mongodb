const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const STATUS = ["YES", "NO"];

const DrugDetailsSchema = new Schema({
    remedisvir: {
        type: STATUS,
        default: "NO"
    },
    remedisvir_duration: {
        type: String
    },
    tocilizumab: {
        type: STATUS,
        default: "NO"
    },
    tocilizumab_duration: {
        type: String
    },
    ventilation: {
        type: STATUS,
        default: "NO"
    },
    ventilation_duration: {
        type: String
    },
    o2: {
        type: STATUS,
        default: "NO"
    },
    o2_duration: {
        type: String
    },
    corticosteroids: {
        type: STATUS,
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