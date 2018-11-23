var router = function(app, io) {
  app.get('/one', function(req, res) {
    res.sendFile('/d/Programma/WorkSpace/Learing\ records/node/socket.io/views/one.html');
    //res.write("add");
  })
}

exports.router = router;