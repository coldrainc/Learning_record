function jsonp(req) {
  var script = document.createElement('script');
  script.setAttribute('src', req.url);
  document.getElementsByTagName('head')[0].appendChild(script);
}

function hello(res) {
  alert('hello' + res.data);
} 

jsonp({
  url: '',
  callback: hello
})