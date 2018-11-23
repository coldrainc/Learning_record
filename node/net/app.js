var express = require('express');
var app = express(); // 创建express实例
var routes = require('./routes/routes.js');

var net = require('net');
var HOST = '127.0.0.1';
var PORT = 8081;

// 创建一个TCP服务器实例， 调用listen函数开始监听指定端口
// 传入net.createServer() 的回调函数将作为 connection 事件的处理函数
// 在每一个 connection 事件中， 该回调函数接受到的socket 对象是唯一的

net.createServer(function(sock) {
  // 我们获得一个链接 - 该连接自动关联一个socket对象
  // 为这个socket实例添加一个 data 事件处理函数
  sock.on('data', function(data) {
    console.log('从客户端接受的数据：' + data);
    // 回发该数据， 客户端将受到来自服务端的数据
    sock.write("I'm server\n");
    sock.end('关闭socket');// 将触发客户端和服务端的close 事件监听
  });

  // 数据错误事件
  sock.on('error', function(exception) {
    console.log('服务端错误socket error: ' + exception);
    sock.end();
  });
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST + ':' + PORT);



routes.router(app); // 调用路由
// console.log(app);

var server =  app.listen(8081,function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log(server.address())
  console.log(__dirname);
  console.log(host);
  console.log(port);
  console.log('应用实例， 访问地址为 http://%s:%s', host, port);
})