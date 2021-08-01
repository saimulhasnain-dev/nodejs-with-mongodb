const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OcularFindingsSchema = new Schema({
    vision_od: {
        type: Number,
    },
    vision_os: {
        type: Number,
    },
    pupil_od: {
        type: Number,
    },
    pupil_os: {
        type: Number,
    }, 
    ocular_od: {
        type: Number,
    },
    ocular_os: {
        type: Number,
    },
    eyelids_od: {
        type: Number,
    },
    eyelids_os: {
        type: Number,
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
    // ent_findings: {
    //     type: String,
    // },
    // ent_media: {
    //     type: String,
    // },
    // other_findings: {
    //     type: String,
    // },
    // other_media: {
    //     type: String,
    // },
}, {
    timestamps: true
});

const OcularFindings = mongoose.model('ocularFindings', OcularFindingsSchema);

module.exports = OcularFindings;