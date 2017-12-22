var express = require('express');
var router = express.Router();
var fs = require('fs');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var accountant = require('../service/accountant');
var questionHandler = require('../repository/questionHandler.js');
var flowController = require('../controller/flowController.js');
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

router.post('/findQuestion',jsonParser,function(req,res,next){
	
	var question = flowController.findQuestion(req.body);
	res.end("Question : "+question.question);
	
});

router.get('/getPoints',function(req,res,next){
	
	res.end('JediPoints :['+points.jediPoints+"]["+points.sithPoints+"]: SithPoints");
	
});

router.get('/getQuestions',function(req,res,next){
	
	var questions = flowController.getQuestions();;
	var names = [];
	var i = 0;
	
	while(i<questions.length){
		
		names[i] = questions[i].question;
		i++;
	}
	
	res.end("Questions list: " + names);
	
});

router.post('/postQuestions',jsonParser,function(req,res,next){
	
	questionHandler.postQuestions(req.body);
	
	res.end('Succesfull');
	
});

router.post('/addQuestion',jsonParser,function(req,res,next){
	
	questionHandler.addQuestion(req.body);
	res.end('Succesfull');
	
});

router.post('/dropQuestion',jsonParser,function(req,res,next){
	
	questionHandler.dropQuestion(req.body);
	res.end('Succesfull');
	
});

module.exports = router;
