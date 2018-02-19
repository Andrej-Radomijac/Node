const questionHandler = require('../repository/questionHandler.js');

class flowController {
	
	flowController(){
		console.log("test");
	};
	
	getQuestions (callback){
		
		questionHandler.fGetQuestions(function(err,result){
		
			if(err){
				
				return callback({"title":"Error getQuestions","message":"list is empty"});
				
			}
			
			return callback(null,result);
		
		});
		
	};
	
	findQuestion(data,callback){
		
		questionHandler.fFindQuestion(data,function(err,result){
		
			if(err) return callback(err);
		
			return callback(null,result);
		
		});
	};
	
	postQuestions(data,callback){
		
		questionHandler.fPostQuestions(data,function(err,result){
		
			if(err)return callback(err);
			
			return callback(null,result);
		
		});
	};
	
	addQuestion(data,callback){
		
		questionHandler.fAddQuestion(data,function(err,result){
		
			if (result[result.length - 1].question == data.question){
				
				return callback(null,result);
				
			}
				
			return callback({"title" : "Error addQuestion","message" : "adding question failed"});
		
		});
	};

	dropQuestion(data,callback){
		
		
		questionHandler.fDropQuestion(data,function(err,result){
		
			if(err){
				
				return callback(err);
			}
			
			return callback(null,result);
			
			});		
	};

};

module.exports = new flowController();
