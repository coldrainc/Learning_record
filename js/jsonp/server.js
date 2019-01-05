var http = require('http');
var urllib = require('url');

var port = 8080;
var data = {'data': world};

http.createServer(function(req, res) {
  var param = urllib.parse(req.url, true);
  if(param.query.callback){
    console.log(param.query.callback)
    // jsonp
    var str = param.query.callback + '(' + JSON.stringify(data) + ')';
    res.end(str);
  }else {
    res.end();
  }
}).listen(port , function() {
  console.log('jsonp server is on');
})