/*
* Primary FIle for the API 
*
*/

//Dependencies

var http = require('http');
var url = require('url');
//The Server should respond to all the requests with a string

var server = http.createServer(function(req,res){

	//Get the url and parse it
	var parsedUrl = url.parse(req.url,true);

	//Get the path
	var path = parsedUrl.pathname;
	var trimedPath = path.replace(/^\/+|\/+$/g,'');

	//Get the HTTP Method
	var method = req.method.toLowerCase();

	//Send the respnse
	res.end('Hello World\n');

	//log the request path
	console.log("Request received on path: "+trimedPath+" With Request: "+method);

});


//Start the server, and have it listen on port 3000
server.listen(3000,function(){
	console.log("The server is listening to the port 3000");
});