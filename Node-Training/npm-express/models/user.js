var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	bcrypt = require('bcrypt');

var userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  created_at: Date,
  updated_at: Date
});

userSchema.pre('save', function(next) {
	var user = this;

	if(!user.isModified('password'))
		return next();

		bcrypt.genSalt(10, function(err, salt){
	        if(err) 
	        	return next(err);

	        bcrypt.hash(user.password, salt, function(err, hashKey){
	            if(err) 
	            	return next(err);
	            console.log("Hashed Password: " + hashKey);
	            user.password = hashKey;
	            next();
	        });
	    });
});

userSchema.statics.findUser = function(username, callback){
	this.findOne({
      username: username
  }, callback);
};

var user = mongoose.model('User', userSchema);

module.exports = {
	User: user
};