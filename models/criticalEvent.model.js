const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CriticalEventSchema = new Schema({
    patient_id: {
        type: Schema.Types.ObjectId, ref: 'Patients'
    },
    note: {
        type: String,
    },
    media: {
        type: String
    },
    event_date: {
        type: Date
    },
    event_time: {
        type: String
    }
}, {
    timestamps: true
});


const CriticalEvent = mongoose.model('criticalEvent', CriticalEventSchema);

module.exports = CriticalEvent;