 /**
 * Created by tierra_murphy on 11/30/16.
 */
 var http= require("http");

 http.createServer(function (request, response){
     response.writeHead(200, {'Content-Type': 'text/html'});
     response.write('Hello World, my name is Tierra Murphy. \n');
 }).listen(8001);

 console.log('Server running at http://127.0.0.1:8001/')