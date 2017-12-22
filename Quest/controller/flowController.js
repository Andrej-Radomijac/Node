var accountant = require('../service/accountant.js');
var questionHandler = require('../repository/questionHandler.js');

var flowController = {
	
	"getQuestions" : function(){
		
		let flag = questionHandler.fGetQuestions();
		
		if(flag == 11){
			
			return "ERROR /GET QUESTIONS";
			
		}else{
			console.log(flag);
			return flag;
			
		}
		
	},
	
	"findQuestion" : function(data){
		
		let flag = questionHandler.fFindQuestion(data);
		
		return flag;
		
	},
	
	"postQuestions" : function(data){
		
		let flag = questionHandler.fPostQuestions(data);
		
	},
	
	"addQuestion" : function(data){
		
		let flag = questionHandler.fAddQuestion(data);
		
		
	},

	"dropQuestion" : function(data){
		
		
		let flag = questionHandler.fDropQuestion(data);
		
		if(flag == 11){
			
			console.log('Nothing is deleted because list is empty!');
			
		}
		
	},

};

module.exports = flowController
