let questions = [];
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
	
	fPostQuestions(data,callback){
		
		questions = data;
		
		let i = 0;
		while(i<questions.length){
			
			questions[i++].id = id++;
			
		}
		
		return callback(null,questions);
	};
	
	fFindQuestion(data,callback){
		
		if(questions.length == 0) return callback({"title" : "Error findQuestion", "message" : "List is empty"});
		
		let i = 0;
		
		while(i<questions.length){
			
			if(data.id == questions[i].id){
				
				return callback(null,questions[i]);
				
			}
			i++;
		}
		
		return callback({"title" : "Error findQuestion", "message" : "There is no such question"});
		
	};
	
	fGetQuestions(callback) {
		
		if(questions.length!=0){
			
	 		return callback(null,questions);;
			
		}else{
			
			return callback({"title":"Error getQuestions","message":"list is empty"});

			
		}
		
	};
	
	fAddQuestion(data,callback){
		
		data.id = id++;
		questions.push(data);
		
		return callback(null,questions);
	};
	
	fDropQuestion(data,callback){
		
		
		if(questions.length==0){
			
			return callback({"title":"Error dropQuestion","message" : "List is empty"});
			
		}else{
			
			let i = 0;
			while(i<questions.length){
				if(data.question == questions[i].question){
					
					questions.splice(i,1);
					return callback(null,questions);
				}
				
				i++;
			}
			
			return callback({"title" : "error", "message":"There is no such question"});
		
		}
		
	};
}

module.exports = new qHandler();
//module.exports = questionHandler;
