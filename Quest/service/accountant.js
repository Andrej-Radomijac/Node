var flowController = require('../controller/flowController.js');

var accountant = {
	
	"fCountPointsHardCode" : function(questions,request){
		
	let jediPoints = 0;
	let sithPoints = 0;
	
	jediPoints += questions[0].anwsers[request.fav_mov].jediPoints;
	sithPoints += questions[0].anwsers[request.fav_mov].sithPoints;
	
	jediPoints += questions[1].anwsers[request.fav_jedi].jediPoints;
	sithPoints += questions[1].anwsers[request.fav_jedi].sithPoints;
	
	jediPoints += questions[2].anwsers[request.fav_sith].jediPoints;
	sithPoints += questions[2].anwsers[request.fav_sith].sithPoints;
	
	jediPoints += questions[3].anwsers[request.fav_planet].jediPoints;
	sithPoints += questions[3].anwsers[request.fav_planet].sithPoints;
	
	jediPoints += questions[4].anwsers[request.force_select].jediPoints;
	sithPoints += questions[4].anwsers[request.force_select].sithPoints;
	
	return {"jediPoints" : jediPoints,"sithPoints" : sithPoints};
		
	},
	
	"fCountPoints" : function(data){
		
	let questions = flowController.getQuestions();
	
	let jediPoints = 0;
	let sithPoints = 0;	
		
	jediPoints += questions[0].anwsers[data.fav_mov].jediPoints;
	sithPoints += questions[0].anwsers[data.fav_mov].sithPoints;
	
	jediPoints += questions[1].anwsers[data.fav_jedi].jediPoints;
	sithPoints += questions[1].anwsers[data.fav_jedi].sithPoints;
	
	jediPoints += questions[2].anwsers[data.fav_sith].jediPoints;
	sithPoints += questions[2].anwsers[data.fav_sith].sithPoints;
	
	jediPoints += questions[3].anwsers[data.fav_planet].jediPoints;
	sithPoints += questions[3].anwsers[data.fav_planet].sithPoints;
	
	jediPoints += questions[4].anwsers[data.force_select].jediPoints;
	sithPoints += questions[4].anwsers[data.force_select].sithPoints;

	return {"jediPoints" : jediPoints,"sithPoints" : sithPoints};
	
	},

};

module.exports = accountant;
