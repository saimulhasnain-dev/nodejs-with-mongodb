const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedSchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId, ref: 'patients'
    },
    calories: {
        type: Number,
    },
    protein: {
        type: Number
    },
    stool_passed: {
        type: String
    }
}, {
    timestamps: true
});


const Feed = mongoose.model('feed', FeedSchema);

module.exports = Feed;