var express = require('express');
var router = express.Router();
var fs = require('fs');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var accountant = require('../service/accountant');
var flowController = require('../controller/flowController.js');
var points;

router.post('/resultsFromFile',jsonParser,function(req,res,next){
	
	let rawData = fs.readFileSync('./Backend.js');
	let parsedData = JSON.parse(rawData);
	
	points = accountant.fCountPointsHardCode(parsedData,req.body);
	
	res.end('Successfull');

});

router.post('/postAnswers',jsonParser,function(req,res,next){
	
	points = accountant.fCountPoints(req.body);
	res.end('Successfull');
	
});

router.post('/findQuestion',jsonParser,function(req,res,next){
	
	let question = flowController.findQuestion(req.body);
	res.end("Question : "+question.question);
	
});

router.get('/getPoints',function(req,res,next){
	
	res.end('JediPoints :['+points.jediPoints+"]["+points.sithPoints+"]: SithPoints");
	
});

router.get('/getQuestions',function(req,res,next){
	
	let questions = flowController.getQuestions();;
	let names = [];
	let i = 0;
	
	while(i<questions.length){
		
		names[i] = questions[i].question;
		i++;
	}
	
	res.end("Questions list: " + names);
	
});

router.post('/postQuestions',jsonParser,function(req,res,next){
	
	flowController.postQuestions(req.body);
	
	res.end('Succesfull');
	
});

router.post('/addQuestion',jsonParser,function(req,res,next){
	
	flowController.addQuestion(req.body);
	res.end('Succesfull');
	
});

router.post('/dropQuestion',jsonParser,function(req,res,next){
	
	flowController.dropQuestion(req.body);
	res.end('Succesfull');
	
});

module.exports = router;
