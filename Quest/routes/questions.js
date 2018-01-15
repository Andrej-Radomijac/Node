const express = require('express');
const router = express.Router();
const fs = require('fs');
const accountant = require('../service/accountant');
const flowController = require('../controller/flowController.js');

router.post('/resultsFromFile',function(req,res,next){
	
	const rawData = fs.readFileSync('./Backend.js');
	const parsedData = JSON.parse(rawData);
	
	const points = accountant.fCountPointsHardCode(parsedData,req.body);
	
	res.status(200).json(points);

});

router.post('/postAnswers',function(req,res,next){
	
	accountant.fCountPoints(req.body,function(err,result){
	
	if(err){
		
		res.status(500).json(err);
		return;
		
	}
	
	res.status(200).json(result);
	
	});
});

router.post('/findQuestion',function(req,res,next){
	
	flowController.findQuestion(req.body,function(err,result){
		
		if(err){
			
			res.status(500).json(err);
			return;
			
		}
		
		res.status(200).json(result);
		
	});
	
});

router.get('/getQuestions',function(req,res,next){
	
	flowController.getQuestions(function(err,result){
	
		if(err){
		
			res.status(500).json(err);
			return;
			
		}
		
		res.status(200).json(result);
		
	});
});

router.post('/postQuestions',function(req,res,next){
	
	flowController.postQuestions(req.body,function(err,result){
	
	if(err){
		
		res.status(500).json(err);
		return;
		
	}
	
	res.status(200).json(result);
	
	});
});

router.post('/addQuestion',function(req,res,next){
	
	flowController.addQuestion(req.body,function(err,result){
		
		if(err){
			
			res.status(500).json(err);
			return;
		}
		
		res.status(200).json(result);
		
	});
	
});

router.post('/dropQuestion',function(req,res,next){
	
	flowController.dropQuestion(req.body,function(err,result){
	
		if(err){
			
			res.status(500).json(err);
			return;
		
		}
		
		res.status(200).json(result);

	});
	
});

module.exports = router;
