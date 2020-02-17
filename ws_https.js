var WebSocketServer = require("ws").Server;
const https = require('https');
const port = '8101';
const fs = require('fs');

const privateKey = fs.readFileSync('/etc/letsencrypt/live/your server domain/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/your server domain/fullchain.pem', 'utf8');


var credentials = { key: privateKey, cert: certificate };
var httpsServer = https.createServer(credentials);
httpsServer.listen(port, console.log(`WebSocket server running on: ${port}`));

const wss = new WebSocketServer({
    server: httpsServer
});

wss.on('connection', function connection(ws, req) {
	console.log("Connected")
	
    ws.on('message', function(message) {
    	console.log("Rcieved message: "+ message);
 
	    ws.send("I have recieved your message");
    })
})
