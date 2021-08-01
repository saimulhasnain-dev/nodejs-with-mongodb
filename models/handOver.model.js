const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HandoverSchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId, ref: 'patients'
    },
    note: {
        type: String,
    },
    media: {
        type: String
    }
}, {
    timestamps: true
});


const Handover = mongoose.model('handover', HandoverSchema);

module.exports = Handover;