const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OcularFindingsSchema = new Schema({
    vision_od: {
        type: String,
    },
    vision_os: {
        type: String,
    },
    pupil_od: {
        type: String,
    },
    pupil_os: {
        type: String,
    }, 
    ocular_od: {
        type: String,
    },
    ocular_os: {
        type: String,
    },
    eyelids_od: {
        type: String,
    },
    eyelids_os: {
        type: String,
    },
    eom: {
        type: String,
    },
    anterior_segment: {
        type: String,
    },
    posterior_segment: {
        type: String,
    },
    ent_findings: {
        type: String,
    },
    ent_media: {
        type: String,
    },
    other_findings: {
        type: String,
    },
    other_media: {
        type: String,
    },
}, {
    timestamps: true
});

const OcularFindings = mongoose.model('ocularFindings', OcularFindingsSchema);

module.exports = OcularFindings;