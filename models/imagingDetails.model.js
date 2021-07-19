const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImagingDetailsSchema = new Schema({
    hrct_findings: {
        type: String,
    },
    hrct_media: {
        type: String
    },
    hrct_date: {
        type: Date
    },
    xray_findings: {
        type: String,
    },
    xray_media: {
        type: String
    },
    xray_date: {
        type: Date
    },
    other_test_name: {
        type: String,
    },
    other_site: {
        type: String,
    },
    other_findings: {
        type: String,
    },
    other_media: {
        type: String
    },
    other_date: {
        type: Date
    },
    doppler_findings: {
        type: String,
    },
    doppler_site: {
        type: String
    },
    doppler_media: {
        type: String
    },
    doppler_date: {
        type: Date
    },
    usg_findings: {
        type: String,
    },
    usg_site: {
        type: String
    },
    usg_media: {
        type: String
    },
    usg_date: {
        type: Date
    },
    mri_type: {
        type: String,
    },
    mri_findings: {
        type: String,
    },
    mri_site: {
        type: String
    },
    mri_media: {
        type: String
    },
    mri_date: {
        type: Date
    },
    ct_type: {
        type: String,
    },
    ct_findings: {
        type: String,
    },
    ct_site: {
        type: String
    },
    ct_media: {
        type: String
    },
    ct_date: {
        type: Date
    },
    cect_nose: {
        type: String,
    },
    cect_pns: {
        type: String
    },
}, {
    timestamps: true
});


const ImagingDetail = mongoose.model('imagingDetail', ImagingDetailsSchema);

module.exports = ImagingDetail;