// var testModule1 = require('./testModule.js');
// var testVar = testModule1.testVar;
// var outputTestVar = testModule1.outputTestVar('testVar');

// console.log(testVar + '\n', outputTestVar);
// console.log(__filename)
// console.log(__dirname)


// var http = require('http');
// var server = http.createServer();

// var testFunction = function(req, res) {
//   if(req.url !== '/favicon.ico'){
//     console.log('发送响应完毕');
//   }
// };

// server.on('request', function(req, res) {
//   if(req.url !== "/favicon.ico"){
//     console.log('接收到客户端的请求');
//   }
// });

// server.on('request', function(req, res) {
//   if(req.url !== '/favincon.ico'){
//     console.log(req.url);
//   }
//   res.end();
// });

// server.on('request', testFunction);
// server.removeListener('request', testFunction);
// server.listen(1337, "127.0.0.1");


var fs = require('fs');
// var data = fs.readFileSync('./index.html', 'utf-8');
// console.log(data)

// fs.readFile('./index.html', 'utf-8', function(err, data) {
//   console.log('data ' + data);
// });

// var option = {
//   flag: 'a'
// }
// fs.writeFile('./message.txt', '这是追加的数据', option, function(err) {
//   if(err) {
//     console.log('数据追加出现错误');
//   }else {
//     console.log('数据追加成功');
//   }
// })
// fs.readFile('./img.jpg', 'base64', function(err, data) {
//   if(err) console.log('文件读取失败');
//   else {
//     console.log('文件读取成功');
//     fs.writeFile('./img2.jpg', data.toString(), 'base64', function(err) {
//       if(err) console.log('文件写入失败');
//       else {
//         console.log('文件写入成功');
//       }
//     })
//   }
// })


// var  fs = require('fs');
// var path = require('path');

// var myPath =  path.join(__dirname);
// console.log(myPath)
// var file = fs.createReadStream(myPath + '/message.txt');
// file.on('data', function(data) {
//   console.log(data.toString());
// })

var net = require('net');
var server = net.createServer();
// var server = net.createServer(function(socket) {
//   server.getConnections(function(err, count) {
//     console.log('当前存在的%d个客户端连接', count);
//     server.maxConnections = 2;
//     console.log('TCP服务器的最大连接数为%d', server.maxConnections);
//   })
//   server.close(function() {
//     console.log('TCP服务器被关闭');
//   })
//   console.log('客户端与服务器建立连接');
// })

// server.listen(8431, 'localhost', function() {
//   address = server.address();
//   console.log('被监听的地址为%j', address);
// })
// console.log('TCP服务器被创建');


server.on('connection', function(socket) {
  address = socket.address();
  console.log('socket端口对象的地址信息为%j', address)
  socket.on
})
server.listen(8431, 'localhost');