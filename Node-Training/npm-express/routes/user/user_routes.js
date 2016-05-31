var hapi = require('hapi'),
	server = new hapi.Server(),
	joi = require('joi'),
	user_mod = require(base + 'modules/user_module.js');

module.exports = [
	{
		method: 'POST',
		path: '/login',
		handler: user_mod.login,
	    config: {
	    	auth: false,
	        validate: {
	            payload: {
	                username: joi.string().required(),
	                password: joi.string().required()
	            }
	        }
	    }
	},
	{
		method: 'POST',
		path: '/signup',
		handler: user_mod.signup,
	    config: {
	    	auth:false,
	        validate: {
	            payload: {
	                username: joi.string().min(3).max(10).alphanum().required(),
	                password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
	                firstName: joi.string().required(),
	                lastName: joi.string().required()
	            }
	        }
	    }
	},
	{
		method: 'GET',
		path: '/getUsers',
		handler: user_mod.getUsers,
	    config: {
	    	auth: 'token',
	    }
	}

];