var accountant = require('./service/accountant.js');
var questionHandler = require('./questionHandler.js');

var flowController = {
	
	"getQuestions" : function(){
		
		var flag = questionHandler.fGetQuestions();
		
		if(flag == 11){
			
			return "ERROR /GET QUESTIONS";
			
		}else{
			console.log(flag);
			return flag;
			
		}
		
	},
	
	"postQuestions" : function(data){
		
		var flag = questionHandler.fPostQuestions(data);
		
	},
	
	"findQuestion" : function(data){
		
		var flag = questionHandler.fFindQuestion(data);
		
		return flag;
		
	},
	
	"addQuestion" : function(data){
		
		var flag = questionHandler.fAddQuestion(data);
		
		
	},

	"dropQuestion" : function(data){
		
		
		var flag = questionHandler.fDropQuestion(data);
		
	},

};

module.exports = flowController
