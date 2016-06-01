var mongoose = require('mongoose');

mongoose.connect('mongodb://'+ process.env.DEV_HOST +'/' + process.env.DEV_DATABASE);

var db = mongoose.connection.on('error', console.error.bind(console, 'connection error'))
    .once('connected', function() {
        console.log("Connected to database")
    });

exports.mongoose = mongoose;
exports.db = db;