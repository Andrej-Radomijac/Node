const accountant = require('../service/accountant.js');
const questionHandler = require('../repository/questionHandler.js');

const flowController = {
	
	"getQuestions" : function(callback){
		
		const flag = questionHandler.fGetQuestions();
		
		if(flag == 11){
			
			return callback({"title":"Error getQuestions","message":"list is empty"});
			
		}
		
		return callback(null,flag);
		
	},
	
	"findQuestion" : function(data,callback){
		
		const flag = questionHandler.fFindQuestion(data);
		
		if(flag == 11){ return callback({"title" : "Error","message" : "no such question"});}
		
		else if(flag == 12){return callback({"title" : "Error","message" : "list is empty"});}
		
		return callback(null,flag);
		
	},
	
	"postQuestions" : function(data){
		
		const flag = questionHandler.fPostQuestions(data);
		
	},
	
	"addQuestion" : function(data,callback){
		
		const flag = questionHandler.fAddQuestion(data);
		
		if (flag.question == data.question){
			
			return callback(null,flag);
			
		}else{
			
			return callback({"title" : "Error addQuestion","message" : "adding question failed"});
			
		}
	},

		
	},

	"dropQuestion" : function(data,callback){
		
		
		const flag = questionHandler.fDropQuestion(data);
		
		if(flag == 11){
			
			return callback({"title" : "Error dropQuestion","message" : "list is empty"});
		}
		
		return callback(null,flag);
		
	},

};

module.exports = flowController
