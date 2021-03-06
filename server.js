// server.js
var express = require('express');  
var app = express();
var server = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));
//redirect / to our index.html file
app.get('/', function(req, res,next) {
    res.sendFile(__dirname + '/public/*');
});

//start our web server and socket.io server listening
server.listen(4000, function(){
  console.log('listening on *:4000');
});
