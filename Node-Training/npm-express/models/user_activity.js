var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = require(base + 'models/user').User;

var userActivitySchema = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    ip_address: { type: String, required: true },
    ua_token: { type: String, required: true },
    signInDate: { type: Date, default: Date.now }
});

var userActivity = mongoose.model('UserActivity', userActivitySchema);

module.exports = {
    UserActivity: userActivity
}