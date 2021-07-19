const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CovidTreatmentSchema = new Schema({
    number_of_episode: {
        type: Number,
        default: 0
    },
    episode_date: {
        type: Date
    },
    history: {
        type: String
    },
    history_type: {
        type: String
    },
    negative_date: {
        type: Date
    }

}, {
    timestamps: true
});


const CovidTreatment = mongoose.model('covidTreatment', CovidTreatmentSchema);

module.exports = CovidTreatment;