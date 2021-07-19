const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CovidTreatment = require('./coivdTreatment.model').schema;
const RtpcrReports = require('./rtpcrReports.model').schema;
const Dose = require('./dosesDetails.mdoel').schema;
const DrugDetails = require('./drugDetails.model').schema;

const CovidDetailsSchema = new Schema({
    rtpcr: RtpcrReports,
    covidTreatment: CovidTreatment,
    doseDetails: Dose,
    drugDetails: DrugDetails
}, {
    timestamps: true
});

const CovidDetails = mongoose.model('covidDetails', CovidDetailsSchema);

module.exports = CovidDetails;