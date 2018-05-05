var http = require('http');
var pug = require('pug');

http.createServer (function(req, res){
	res.setHeader('Content-type', 'text/html');
	var html = pug.renderFile('../text.jade',{});
	res.end(html);
}).listen(8000);

console.log('Server running at http://127.0.0.1:8000');
