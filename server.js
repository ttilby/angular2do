// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 3001;

 
app.use('/', express.static('client'));

server.listen(port, function () {
    console.log('Server listening at port %d', port);
});
