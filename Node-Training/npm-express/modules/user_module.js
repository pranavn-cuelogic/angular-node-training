var User = require(base + 'models/user').User,
	config = require(base + 'config/config'),
	bcrypt = require('bcrypt'),
	jwt = require('jsonwebtoken'),
	hashKey = config.env.hashKey,
	saltRound = config.env.saltRound;

module.exports = {

	login: function(request, reply) {
		User.findUser(request.payload.username, function(err, result) {
			if(err) {
				return reply(err);
			} 

			if(result == null) {
					return reply('Invalid username or password!');
			} else {
				bcrypt.compare(request.payload.password, result.password, function(err, hash) {
  					if(err) {
  						return reply(err);
  					}
  					var userData = {
  						username: result.username,
  						firstName: result.firstName,
  						lastName: result.lastName,
  					};
  					var token = jwt.sign({
  								user_id: result._id
  							}, hashKey, { algorithm: 'HS256'});
  					reply('Logged in:' + userData.firstName + ' '+ token);
				});
			}

		})
	},

	signup: function(request, reply) {
		console.log(request.payload);
		var user = new User(request.payload);

		user.save(function(err, result) {
			if(err) {
				return reply('Something went wrong, please try again!');
			}
			reply(user.firstName +' '+ user.lastName + ' Sign up successfully!');
		});
	},

	getUsers: function(request, reply) {
		User.find({}, function(err, result) {
			if(err) {
				return reply('Something has went wrong!');
			}
			reply(result);
		})
	}


}
