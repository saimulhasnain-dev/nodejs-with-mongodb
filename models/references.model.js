const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReferencesSchema = new Schema({
    patient_id: {
        type: Schema.Types.ObjectId, ref: 'Patients'
    },
    dept_name: {
        type: String,
    },
    date: {
        type: Date
    },
    reference: {
        type: String
    }
}, {
    timestamps: true
});


const References = mongoose.model('references', ReferencesSchema);

module.exports = References;