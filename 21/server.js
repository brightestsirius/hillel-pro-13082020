let http = require('http'),
	static = require('node-static'),
	file = new static.Server('.');
 
http
	.createServer(function (request, response) {
	    file.serve(request, response);
	}).listen(8080);