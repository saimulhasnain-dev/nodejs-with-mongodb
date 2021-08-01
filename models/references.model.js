const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReferencesSchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId, ref: 'patients'
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