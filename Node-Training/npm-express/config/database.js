var mongoose = require('mongoose');

var options = {
  db: 'user_app',
  host: 'localhost',
  port: 27017,
  user: '',
  pass: ''
}

mongoose.connect('mongodb://localhost/user_app');

var db = mongoose.connection.on('error', console.error.bind(console, 'connection error'))
	.once('connected', function() {
	console.log("Connected to database")
});

exports.mongoose = mongoose;
exports.db = db;