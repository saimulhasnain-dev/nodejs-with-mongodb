const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MucorDetailsSchema = new Schema({
    result: {
        type: String,
    },
    date_of_symptoms: {
        type: Date
    },
    warning_and_sign: [{
        type: String
    }],
    action_taken: {
        type: String
    }
}, {
    timestamps: true
});

const MucorDetails = mongoose.model('mucorDetails', MucorDetailsSchema);

module.exports = MucorDetails;