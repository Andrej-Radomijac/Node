const express = require('express');
const router = express.Router();
const fs = require('fs');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const accountant = require('../service/accountant');
const flowController = require('../controller/flowController.js');
var points;

router.post('/resultsFromFile',jsonParser,function(req,res,next){
	
	const rawData = fs.readFileSync('./Backend.js');
	const parsedData = JSON.parse(rawData);
	
	points = accountant.fCountPointsHardCode(parsedData,req.body);
	
	res.end('Successfull');

});

router.post('/postAnswers',jsonParser,function(req,res,next){
	
	points = accountant.fCountPoints(req.body);
	res.end('Successfull');
	
});

router.post('/findQuestion',jsonParser,function(req,res,next){
	
	const question = flowController.findQuestion(req.body);
	res.end("Question : "+question.question);
	
});

router.get('/getPoints',function(req,res,next){
	
	res.end('JediPoints :['+points.jediPoints+"]["+points.sithPoints+"]: SithPoints");
	
});

router.get('/getQuestions',function(req,res,next){
	
	const questions = flowController.getQuestions();;
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
