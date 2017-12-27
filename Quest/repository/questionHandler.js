var questions = [];
let id = 0;

/*const questionHandler = {

	"fPostQuestions" : function(data){
		
		questions = data;
		
		let i = 0;
		while(i<questions.length){
			
			questions[i++].id = id++;
			
		}
		
		return questions;
	},
	
	"fFindQuestion" : function(data){
		
		if(questions.length == 0) return 12;
		
		let i = 0;
		
		while(i<questions.length){
			
			if(data.id == questions[i].id){
				
				return questions[i];
				
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
		
		return questions[questions.length-1];
	},
	
	"fDropQuestion" : function(data){
		
		
		if(questions.length==0){
			
			return 11;
			
		}else{
			
			let i = 0;
			while(i<questions.length){
				if(data.question == questions[i].question){
					
					questions.splice(i,1);
					return questions;
				}
				
				i++;
			}
			
			return 11;
		
		}
		
	},

};*/
class qHandler {
	
	qHandler(){
		
	};
	
	fPostQuestions(data){
		
		questions = data;
		
		let i = 0;
		while(i<questions.length){
			
			questions[i++].id = id++;
			
		}
		
		return questions;
	};
	
	fFindQuestion(data){
		
		if(questions.length == 0) return 12;
		
		let i = 0;
		
		while(i<questions.length){
			
			if(data.id == questions[i].id){
				
				return questions[i];
				
			}
			i++
		}
		
		return 11;
		
	};
	
	fGetQuestions() {
		
		if(questions.length!=0){
			
			return questions;
			
		}else{
			
			return 11;
			
		}
		
	};
	
	fAddQuestion(data){
		
		data.id = id++;
		questions.push(data);
		
		return questions[questions.length-1];
	};
	
	fDropQuestion(data){
		
		
		if(questions.length==0){
			
			return 11;
			
		}else{
			
			let i = 0;
			while(i<questions.length){
				if(data.question == questions[i].question){
					
					questions.splice(i,1);
					return questions;
				}
				
				i++;
			}
			
			return 11;
		
		}
		
	};
}

module.exports = new qHandler();
//module.exports = questionHandler;
