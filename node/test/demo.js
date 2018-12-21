var fs = require('fs');

fetch(`http://api.react.beer/v2/search?q=hops&type=beer`)
    .then(data => data.json())
    .then(data => {
      fs.writeFile('./test.json', data.data, function(err) {
        console.log(err);
      })
  
    }).catch(err => {
      console.log(err);
    })