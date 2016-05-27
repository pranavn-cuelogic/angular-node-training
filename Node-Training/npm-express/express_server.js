var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.send('Hello Pranav');
});


app.post('/', function(req, res) {
	console.log('This a post reqeust');
	res.send('Hello Post');
});

app.delete('/del_user', function(req, res) {
	console.log('This a delete reqeust');
	res.send('Hello Delete');
});

app.get('/list_user', function(req, res) {
	console.log('This a get list_user reqeust');
	res.send('Hello List');
});

app.get('/ab*cd', function(req, res) {
	console.log('Pattern match');
	res.send('Hello Pattern');
});

var server = app.listen(3030, function() {
	var host = server.address().address
	var port = server.address().port

	console.log('Server is running on the port %s', port)
});
