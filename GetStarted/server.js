var express = require('express');
var app = express();

app.get('/', function	(rea, res){
		//res.send("Sending a Hello to the World!!");
		res.sendFile('./public/index.html', {root: __dirname});
	});

app.use(express.static('public'));
app.listen(9000, function() {
	console.log('the app is running on local host port 9000');
});