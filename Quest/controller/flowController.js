const accountant = require('../service/accountant.js');
const questionHandler = require('../repository/questionHandler.js');

const flowController = {
	
	"getQuestions" : function(callback){
		
		questionHandler.fGetQuestions(function(err,result){
		
		if(err){
			
			return callback({"title":"Error getQuestions","message":"list is empty"});
			
		}
		
		return callback(null,result);
		
		});
		
	},
	
	"findQuestion" : function(data,callback){
		
		questionHandler.fFindQuestion(data,function(err,result){
		
			if(err) return callback(err);
		
			return callback(null,result);
		
		});
	},
	
	"postQuestions" : function(data,callback){
		
		questionHandler.fPostQuestions(data,function(err,result){
		
		if(err)return callback(err);
		
		return callback(null,result);
		
		});
	},
	
	"addQuestion" : function(data,callback){
		
		questionHandler.fAddQuestion(data,function(err,result){
		
		if (result[result.length - 1].question == data.question){
			
			return callback(null,result);
			
		}else{
			
			return callback({"title" : "Error addQuestion","message" : "adding question failed"});
			
		}
		
		});
	},

	"dropQuestion" : function(data,callback){
		
		
		questionHandler.fDropQuestion(data,function(err,result){
		
		if(err){
			
			return callback(err);
		}
		
		return callback(null,result);
		
		});		
	},

};

module.exports = flowController
