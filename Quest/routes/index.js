const express = require('express');
const router  = express.Router();
const fs = require('fs');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const accountant = require('../service/accountant');

const rawData = fs.readFileSync('./Backend.js');
const parsedData = JSON.parse(rawData);

router.get('/',function(req,res,next){

	res.render('questions',{content:parsedData});
	
});

router.post('/',urlencodedParser,function(req,res,next){
	
	const points = accountant.fCountPointsHardCode(parsedData,req.body);
	res.render('results',{jPoints : points.jediPoints, sPoints : points.sithPoints});
	
});

module.exports = router;
