const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedSchema = new Schema({
    patient_id: {
        type: Schema.Types.ObjectId, ref: 'Patients'
    },
    calories: {
        type: String,
    },
    protein: {
        type: String
    },
    stool_passed: {
        type: String
    }
}, {
    timestamps: true
});


const Feed = mongoose.model('feed', FeedSchema);

module.exports = Feed;