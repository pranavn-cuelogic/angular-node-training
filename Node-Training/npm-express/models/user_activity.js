var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userActivitySchema = new Schema({
  IP: { type: String, required: true },
  UAToken: { type: String, required: true },
  signInDate: Date
});

var userActivity = mongoose.model('UserActivity', userActivitySchema);

module.exports = {
	UserActivity = userActivity
}