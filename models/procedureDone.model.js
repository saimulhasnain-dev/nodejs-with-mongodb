
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProcedureDoneSchema = new Schema({
    status: {
        type: String,
    },
    date_of_procedure: {
        type: Date
    },
    procedure_performed: [{
        type: String
    }],
    procedure_notes: {
        type: String
    },
    media_attachment: {
        type: String
    }
}, {
    timestamps: true
});

const ProcedureDone = mongoose.model('procedureDone', ProcedureDoneSchema);

module.exports = ProcedureDone;