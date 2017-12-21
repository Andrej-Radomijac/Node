var express = require('express');
var router = express.Router();
var fs = require('fs');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var accountant = require('../accountant');
var questionHandler = require('../questionHandler.js');
var points;

router.post('/resultsFromFile',jsonParser,function(req,res,next){
	
	var rawData = fs.readFileSync('./Backend.js');
	var parsedData = JSON.parse(rawData);
	
	points = accountant.fCountPointsHardCode(parsedData,req.body);
	
	res.end('Successfull');

});

router.post('/postAnswers',jsonParser,function(req,res,next){
	
	points = accountant.fCountPoints(req.body);
	res.end('Successfull');
	
});

router.get('/getPoints',function(req,res,next){
	
	res.end('JediPoints :['+points.jediPoints+"]["+points.sithPoints+"]: SithPoints");
	
});

router.get('/getQuestions',function(req,res,next){
	
	var questions = questionHandler.fGetQuestions();
	var names = [];
	var i = 0;
	
	while(i<questions.length){
		
		names[i] = questions[i].question;
		i++;
	}
	
	res.end("Questions list: " + names);
	
});

router.post('/postQuestions',jsonParser,function(req,res,next){
	
	questionHandler.fPostQuestions(req.body);
	
	res.end('Succesfull');
	
});

router.post('/addQuestion',jsonParser,function(req,res,next){
	
	questionHandler.fAddQuestion(req.body);
	res.end('Succesfull');
	
});

router.post('/dropQuestion',jsonParser,function(req,res,next){
	
	questionHandler.fDropQuestion(req.body);
	console.log(questionHandler.fGetQuestions);
	res.end('Succesfull');
	
});

module.exports = router;