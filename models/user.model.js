const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const STATUS = ["ACTIVE", "BLOCKED", "DELETED"];
const USER_TYPE = ["WARD_BOY", "DOCTOR", "OTHER"]

const UsersSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email id is required']
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
    sos: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});


const Users = mongoose.model('users', UsersSchema);

module.exports = Users;