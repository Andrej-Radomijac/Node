const flowController = require('../controller/flowController.js');

class accountant {
	
	fCountPointsHardCode(questions,request){
		
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
		
	};
	
	fCountPoints(data,callback){
		
		flowController.getQuestions(function(err,result){

			if(err)return callback(err);

			let jediPoints = 0;
			let sithPoints = 0;	

			jediPoints += result[0].anwsers[data.fav_mov].jediPoints;
			sithPoints += result[0].anwsers[data.fav_mov].sithPoints;

			jediPoints += result[1].anwsers[data.fav_jedi].jediPoints;
			sithPoints += result[1].anwsers[data.fav_jedi].sithPoints;

			jediPoints += result[2].anwsers[data.fav_sith].jediPoints;
			sithPoints += result[2].anwsers[data.fav_sith].sithPoints;

			jediPoints += result[3].anwsers[data.fav_planet].jediPoints;
			sithPoints += result[3].anwsers[data.fav_planet].sithPoints;

			jediPoints += result[4].anwsers[data.force_select].jediPoints;
			sithPoints += result[4].anwsers[data.force_select].sithPoints;

			if(jediPoints>sithPoints) return callback(null,jediAnswer);
			
			else if(sithPoints>jediPoints) return callback(null,sithAnswer);
			
			else return callback(null,equalAnswer);

		});	
	};
};

module.exports = new accountant();
