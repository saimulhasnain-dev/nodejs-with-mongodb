const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonalDetailsSchema = new Schema({
    state: {
        type: String,
        required: [true, 'State is required']
    },
    city: {
        type: String,
        required: [true, 'City is required']
    },
    address: {
        type: String,
        required: [true, 'Address is required']
    },
    area: {
        type: String,
        required: [true, 'Area is required']
    },
    complete_address: {
        type: String,
        required: [true, 'Complete Address is required']
    },
    pin_code: {
        type: Number,
        required: [true, 'Pin code is required']
    },
    mobile: {
        type: Number,
        required: [true, 'Mobile is required']
    },
}, {
    timestamps: true
});

const PersonalDetails = mongoose.model('personalDetails', PersonalDetailsSchema);

module.exports = PersonalDetails;