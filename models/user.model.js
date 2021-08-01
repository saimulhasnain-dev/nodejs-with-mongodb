const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const STATUS = ["ACTIVE", "BLOCKED", "DELETED"];
const USER_TYPE = ["WARD_BOY", "DOCTOR", "OTHER"]
const NOTIFICATION_STATUS = ["ON", "OFF"];

const UsersSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email id is required']
    },
    mobile: {
        type: Number,
        unique: true,
        required: [true, 'Mobile is required']
    },
    password: {
        type: String,
    },
    user_type: {
        type: String,
        enum: USER_TYPE
    },
    assigned_ward: {
        type: String
    },
    status: {
        type: String,
        enum: STATUS,
        default: 'ACTIVE'
    },
    notification_status: {
        type: String,
        enum: NOTIFICATION_STATUS,
        default: 'ON'
    },
    sos: {
        type: Boolean,
        default: false
    },
    device_token: {
        type: String,
    },
    jwt_token: {
        type: String,
    }
}, {
    timestamps: true
});


const Users = mongoose.model('users', UsersSchema);

module.exports = Users;