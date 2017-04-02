const https = require('https');

https.get('https://www.reddit.com/place?webview=true/', (res) => {
//  console.log('statusCode:', res.statusCode);
//  console.log('headers:', res.headers);

res.setEncoding('utf8');
let rawData = '';

  res.on('data', (chunk) => rawData += chunk);
  res.on('end', () => {
	wsurl = (rawData.toString ().match (/"place_websocket_url": "([\S]+)",/) [1]);
	console.log ("Got URL: "+wsurl);
	start_ws (wsurl);
 });

}).on('error', (e) => {
  console.error(e);
});

function start_ws (wsurl) {
var WebSocket = require('ws')
  , ws = new WebSocket(wsurl);
ws.on('open', function() {
    ws.send('something');
});
ws.on('message', function(message) {
//    console.log('received: %s', message);
    let msg = JSON.parse (message);
    let x = msg.payload.x;
    let y = msg.payload.y;
    let color = msg.payload.color;
    console.log('received x / y: %s / %s / %s', x, y, color);
});
ws.on('error', function(message) {
    console.log('error: %s', message);
});
};
