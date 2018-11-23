var express = require('express');
var app = express();// 创建express实例
var routes = require('./routes/routes.js'); // 把路由引入；
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
server.listen(8081);
io.sockets.on('connection', function(socket) {
  console.log('建立了连接');
  socket.emit('news', {hello: '服务端world'});
  socket.on('m', function(data) {
    console.log(data);
  });
});

routes.router(app, io) // 调用路由

