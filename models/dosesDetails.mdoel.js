const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoseSchema = new Schema({
    number_of_dose: {
        type: Number,
        default: 0
    },
    dose1_date: {
        type: Date
    },
    dose2_date: {
        type: Date
    }
    
}, {
    timestamps: true
});


const Dose = mongoose.model('dose', DoseSchema);

module.exports = Dose;