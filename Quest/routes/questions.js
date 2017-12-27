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
	
	res.status(200).json(points);

});

router.post('/postAnswers',jsonParser,function(req,res,next){
	
	points = accountant.fCountPoints(req.body);
	res.status(200).json(points);
	
});

router.post('/findQuestion',jsonParser,function(req,res,next){
	
	flowController.findQuestion(req.body,function(err,result){
		
		if(err) res.status(500).json(err);
		
		res.status(200).json(result);
		
	});
	
});

router.get('/getPoints',function(req,res,next){
	
	res.status(200).json(points);
	
});

router.get('/getQuestions',function(req,res,next){
	
	flowController.getQuestions(function(err,result){
	
		if(err)res.status(500).json(err);
		
		res.status(200).json(result);
		
	});
});

router.post('/postQuestions',jsonParser,function(req,res,next){
	
	flowController.postQuestions(req.body);
	
	res.status(200).json(questions);
	
});

router.post('/addQuestion',jsonParser,function(req,res,next){
	
	flowController.addQuestion(req.body,function(err,result){
		
		if(err)res.status(500).json(err);
		
		res.status(200).json(result);
		
	});
	
});

router.post('/dropQuestion',jsonParser,function(req,res,next){
	
	const result = flowController.dropQuestion(req.body);
	
	if(result == 11){
		
		res.status(500).json({"title" : "Error while dropping question","message" : "Question list is empty or something else occuried"});
		
	}else{
		
		res.status(200).json(result);
	}
	
});

module.exports = router;
