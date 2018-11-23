const http = require('http');
const fs = require('fs');
const express = require('express');
const io = require('socket.io');


const app = express();

const httpServer = http.createServer(app, function() {
    console.log('客户与服务端建立连接');
});
app.use('/', express.static(__dirname + '/www'));

httpServer.listen(8081, 'localhost', function() {
    console.log('服务端开始监听');
});

const ioserve = io.listen(httpServer);

let users = [];

ioserve.on('connection', (socket) => {
    socket.on('login', (nickname) => {
        if (users.indexOf(nickname) > -1) {
            socket.emit('nickExisted');
        } else {
            socket.userIndex = users.length;
            socket.nickname = nickname;

            users.push(nickname);
            socket.emit('loginSuccess');

            ioserve.sockets.emit('system', nickname, users.length, 'login');
        }
    });

    socket.on('postMsg', function (msg) {
        socket.broadcast.emit('newMsg', socket.nickname, msg);
    });

    socket.on('img', function (imgData) {
        socket.broadcast.emit('newImg', socket.nickname, imgData);

    })

    socket.on('disconnect', function () {
        users.splice(socket.userIndex, 1);
        socket.broadcast.emit('system', socket.nickname, users.length, 'logout');
    });

    socket.on('error', function(e) {
        if(e.code == 'EADDRINUSE') {
            console.log('服务器地址及端口已被占用');
        }
    })
})



