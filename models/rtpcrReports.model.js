const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RtpcrReportsSchema = new Schema({
    test_date: {
        type: Date
    },
    result: {
        type: String
    },

}, {
    timestamps: true
});


const RtpcrReports = mongoose.model('rtpcrReports', RtpcrReportsSchema);

module.exports = RtpcrReports;