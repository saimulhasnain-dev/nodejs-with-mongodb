const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BiopsySchema = new Schema({
    status: {
        type: String,
        default: "NO"
    },
    result: {
        type: String,
    },
    media_attachment: {
        type: String,
    }
}, {
    timestamps: true
});

const Biopsy = mongoose.model('biopsy', BiopsySchema);

module.exports = Biopsy;