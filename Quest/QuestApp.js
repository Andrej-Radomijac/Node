var http = require('http');
var express = require('express');
var app = express();
var path = require('path');

var questions = require('./routes/questions');
var index = require('./routes/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

app.use('/questions',questions);
app.use('/',index);

app.use(express.static(path.join(__dirname, 'public')));

app.set('port',5001);

var server = http.createServer(app);

server.listen(5001);

app.use(function(err,req,res,next){
	
	console.error(err.stack);
	res.status(500).send('Error!');

});

module.exports = app;
