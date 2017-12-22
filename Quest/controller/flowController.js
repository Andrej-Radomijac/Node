const accountant = require('../service/accountant.js');
const questionHandler = require('../repository/questionHandler.js');

const flowController = {
	
	"getQuestions" : function(){
		
		const flag = questionHandler.fGetQuestions();
		
		if(flag == 11){
			
			return "ERROR /GET QUESTIONS";
			
		}else{
			console.log(flag);
			return flag;
			
		}
		
	},
	
	"findQuestion" : function(data){
		
		const flag = questionHandler.fFindQuestion(data);
		
		return flag;
		
	},
	
	"postQuestions" : function(data){
		
		const flag = questionHandler.fPostQuestions(data);
		
	},
	
	"addQuestion" : function(data){
		
		const flag = questionHandler.fAddQuestion(data);
		
		
	},

	"dropQuestion" : function(data){
		
		
		const flag = questionHandler.fDropQuestion(data);
		
		if(flag == 11){
			
			console.log('Nothing is deleted because list is empty!');
			return flag;
		}
		
		return flag;
		
	},

};

module.exports = flowController
