var accountant = require('../service/accountant.js');
var questionHandler = require('../repository/questionHandler.js');

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
	
	"findQuestion" : function(data){
		
		var flag = questionHandler.fFindQuestion(data);
		
		return flag;
		
	},
	
	"postQuestions" : function(data){
		
		var flag = questionHandler.fPostQuestions(data);
		
	},
	
	"addQuestion" : function(data){
		
		var flag = questionHandler.fAddQuestion(data);
		
		
	},

	"dropQuestion" : function(data){
		
		
		var flag = questionHandler.fDropQuestion(data);
		
		if(flag == 11){
			
			console.log('Nothing is deleted because list is empty!');
			
		}
		
	},

};

module.exports = flowController
