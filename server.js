var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send({You: 'This is a stupid nigga'});
});

app.listen(process.env.PORT || 8080, function(err) {
	if(err) {
	console.log('could not connect to the provided port number');
 } else {
console.log('Listening on port', process.env.PORT);}
})
