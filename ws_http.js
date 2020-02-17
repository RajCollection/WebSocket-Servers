var http = require( "http" ); //Require the http module
var WebSocketServer = require("ws").Server; //Require the WebSocket server module
const port = '8101';
var httpServer = http.createServer();

httpServer.listen(port, console.log(`WebSocket server running on: ${port}`)); 

const wss = new WebSocketServer({
    server: httpServer
});

wss.on('connection', function connection(ws, req) {
	console.log("Connected")
	
    ws.on('message', function(message) {
    	console.log("Rcieved message: "+ message);
 
	    ws.send("I have recieved your message");
    })
})



