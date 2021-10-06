var http = require('http')
var fs = require('fs')
var url = require('url')

var app = http.createServer(function(request, response) {
	var _url = request.url;
	var queryData = url.parse(_url, true).query;	//객체가 들어감
	if(_url == '/') {
		_url = '/index.html';
	}
	if(_url == '/favicon.ico') {
		return response.writeHead(404);
	}
	response.writeHead(200);
	//response.end(fs.readFileSync(__dirname + _url));
	var template = `
	<!DOCTYPE html>
	<html>
		<head>
			<title>${queryData.name}</title>
		</head>
		<body>
			<h1>name</h1>
			<p>my name is ${queryData.name}</p>
		</body>
	</html>
	`
	response.end(template);
});
app.listen(3000);