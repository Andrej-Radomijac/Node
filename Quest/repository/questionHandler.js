var questions = [];
var id = 0;

var questionHandler = {

	"fPostQuestions" : function(data){
		
		questions = data;
		
		let i = 0;
		while(i<questions.length){
			
			questions[i++].id = id++;
			
		}
		
		
	},
	
	"fFindQuestion" : function(data){
		
		let i = 0;
		while(i<questions.length){
			
			if(data.id == questions[i].id){
				
				return questions[i]
				
			}
			i++
		}
		return 11;
		
	},
	
	"fGetQuestions" : function() {
		
		if(questions.length!=0){
			
			return questions;
			
		}else{
			
			return 11;
			
		}
		
	},
	
	"fAddQuestion" : function(data){
		
		data.id = id++;
		questions.push(data);
		
		
	},
	
	"fDropQuestion" : function(data){
		
		
		if(questions.length==0){
			
			return 11;
			
		}else{
			
			let i = 0;
			while(i<questions.length){
				if(data.question == questions[i].question){
					
					questions.splice(i,1);
					return 0;
				}
				
				i++;
			}
			
		}
		
	},

};

module.exports = questionHandler;
