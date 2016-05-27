require('./modules.js');
server = new Hapi.Server();
emitter = new Events.EventEmitter();
server.connection({
	host: 'localhost',
	port: 3000
});

server.register([{
	register: Good,
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
	register: Inert,
}], (err) => {
	if(err) {
		throw err;
	}

	server.start((err) => {
		if(err) {
			throw err;
		}
		console.log('info', 'Server running at:', server.info.uri);
	});
});
