server.route({
	method: 'GET',
	path: '/',
	handler: function(request, reply) {
		reply.file('./public/html/demo_test.html');
	}
});

server.route({
	method: 'GET',
	path: '/hello',
	handler: function(request, reply) {
		return reply('Hello Node');
	}
});

server.route({
	method: 'GET',
	path:'/{name}',
	handler: function(request, reply) {
		reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
	}
});