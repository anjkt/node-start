/*
* Primary FIle for the API 
*
*/

//Dependencies

var http = require('http');

//The Server should respond to all the requests with a string

var server = http.createServer(function(req,res){
	res.end('Hello World\n');
});
//Start the server, and have it listen on port 3000
server.listen(3000,function(){
	console.log("The server is listening to the port 3000");
});