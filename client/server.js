var server = require('http').createServer().listen(8080);
var io = require('socket.io').listen(server);

io.socket.on('connection', function(socket){
    console.log('Un client est connecté !');
});
