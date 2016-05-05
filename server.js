'use strict';

var hapi = require('hapi'),
    server = new hapi.Server();

server.register(require('inert'), function(err) {

    if (err) {
        throw err;
    }

    server.connection({ port: 3000 });

    server.route([{
        method: 'GET',
        path: '/resource/{param*}',
        handler: {
            directory: {
                path: 'build/resource'
            }
        }
    }, {
        method: 'GET',
        path: '/app/{param*}',
        handler: {
            directory: {
                path: 'app'
            }
        }
    }, {
        method: 'GET',
        path: '/{path*}',
        handler: function(request, reply) {
            reply.file('./build/index.html');
        }
    }]);

    server.start(function(err) {
        if (err) {
            throw err;
        }
        console.log('Web server is listening to http://localhost:3000');
    });
});
