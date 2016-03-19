
var request = require('request');

request('http://google.com', function(err, response, body){ // request.get returns a promise; end passes in a callback function
  // replace google.com with another api you want to hit
  var mangled = body.replace('google', 'NICHOLAS');
  console.log(mangled);

});