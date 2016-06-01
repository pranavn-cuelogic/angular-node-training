'use strict'

// global base directory path
global.base = __dirname + '/';
require('dotenv').config();

var hapi = require('hapi'),
    config = require(base + 'config/config.js'),
    db = require(base + 'config/database.js'),
    good = require('good'),
    inert = require('inert'),
    server = new hapi.Server(),
    routes = require(base + '/routes/user/user_routes.js');

server.connection({
    host: 'localhost',
    port: 3000
});

var validate = function(request, decodedToken, callback) {

    var error,
        credentials = decodedToken.accountId || {};

    if (!credentials) {
        return callback(error, false, credentials);
    }

    return callback(error, true, decodedToken);
};


server.register([{
    register: good,
    options: {
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    response: '*',
                    log: '*'
                }]
            }, {
                module: 'good-console',
            }, 'stdout']
        }
    }
}, {
    register: inert,
}, {
    register: require('hapi-auth-jwt'),
}], (err) => {
    if (err) {
        throw err;
    }

    server.auth.strategy('token', 'jwt', {
        key: process.env.HASH_KEY,
        validateFunc: validate,
        verifyOptions: { algorithms: ['HS256'] } // only allow HS256 algorithm
    });

    server.route(routes);

    server.start((err) => {
        if (err) {
            throw err;
        }
        console.log('info', 'Server running at:', server.info.uri);
    });
});