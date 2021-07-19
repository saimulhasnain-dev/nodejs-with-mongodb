const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const STATUS = ["READ", "UNREAD"]
const NotificationsSchema = new Schema({
    text: {
        type: String,
    },
    type: {
        type: String
    },
    status: {
        type: STATUS,
        default: "UNREAD"
    },
    user_id: {
        type: Schema.Types.ObjectId, ref: 'Users'
    }

}, {
    timestamps: true
});

const Notifications = mongoose.model('Notifications', NotificationsSchema);

module.exports = Notifications;