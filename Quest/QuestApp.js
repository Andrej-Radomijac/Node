var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');

var questions = require('./routes/questions');
var index = require('./routes/index.js');

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

app.set('trust proxy', 1);

app.use(session({
	
  cookieName: 'session',
  secret: 'profQuest',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
  
}));

app.use('/questions',questions);
app.use('/',index);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('port',5001);

var server = http.createServer(app);

server.listen(5001);

app.use(function(err,req,res,next){
	
	console.error(err.stack);
	
});

module.exports = app;
