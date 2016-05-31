'use strict'

// global base directory path
global.base = __dirname + '/';

var	hapi = require('hapi'),
	config = require(base + 'config/config.js'),
	db = require(base + 'config/database.js'),
	good = require('good'),
	inert = require('inert'),
	server = new hapi.Server(),
	routes = require(base + '/routes/user/user_routes.js'),
	hashKey = config.env.hashKey;

server.connection({
	host: 'localhost',
	port: 3000
});

var validate = function (request, decodedToken, callback) {

	console.log(request);
	console.log(decodedToken);
	console.log(callback);

    var error,
        credentials = users[decodedToken.accountId] || {};

    if (!credentials) {
        return callback(error, false, credentials);
    }

    return callback(error, true, credentials);
};

server.register([{
	register: good,
	options: {
		reporters: {
			console: [{
				module: 'good-squeeze',
				name: 'Squeeze',
				args:[{
					response: '*',
					log: '*'
				}]
			},{
				module: 'good-console',
			}, 'stdout']
		}
	}
},{
	register: inert,
},{
	register: require('hapi-auth-jwt'),
}], (err) => {
	if(err) {
		throw err;
	}

	server.auth.strategy('token', 'jwt', {
        key: hashKey,
        validateFunc: validate,
        verifyOptions: { algorithms: [ 'HS256' ] }  // only allow HS256 algorithm
    });

    server.route(routes);

	server.start((err) => {
		if(err) {
			throw err;
		}
		console.log('info', 'Server running at:', server.info.uri);
	});

});

