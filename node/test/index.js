// var net = require('net');
// var server = net.createServer(function(socket) {
//   console.log('客户端与服务器端连接已建立');
// })
// server.listen(8431, 'localhost', function() {
//   console.log('服务器端开始监听');
// })

const http = require('http');
const fs = require('fs');
const express = require('express');
const io = require('socket.io');

const app = express();

const httpServer = http.createServer(app);
app.use('/', express.static(__dirname + 'www'));
httpServer.listen(8081);

const  ioserve = io.listen(httpServer);

let users = [];
ioserve.on('connection', (socket) => {
  socket.on('login', (nickname) => {
    if(users.indexOf(nickname) > -1) {
      socket.emit('nickExisted');
    }else {
      socket.userIndex = users.length;
      socket.nickname = users.nickname;
    }
  })
})
