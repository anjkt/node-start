/*
* Primary FIle for the API 
*
*/

//Dependencies

var http = require('http');
var url = require('url');
var StringDecoder = require('string_decoder').StringDecoder;
//The Server should respond to all the requests with a string

var server = http.createServer(function(req,res){

	//Get the url and parse it
	var parsedUrl = url.parse(req.url,true);

	//Get the path
	var path = parsedUrl.pathname;
	var trimedPath = path.replace(/^\/+|\/+$/g,'');

	//Get the query string as an object
	var queryStringObject = parsedUrl.query;

	//Get the HTTP Method
	var method = req.method.toLowerCase();

	//Get the headers as an object
	var headers = req.headers;

	//Get the payload
	var decoder = new StringDecoder('utf-8');
	var buffer = '';
	req.on('data',function(data) {
		buffer += decoder.write(data)
	});
	req.on('end',function(){
		buffer += decoder.end();
		
		//Send the respnse
		res.end('Hello World\n');

		//log the request path
		console.log("Request recieved with this payload ",buffer);
	})
});


//Start the server, and have it listen on port 3000
server.listen(3000,function(){
	console.log("The server is listening to the port 3000");
});