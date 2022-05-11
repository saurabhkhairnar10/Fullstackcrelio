
const IssueAccessor = require('../accessor/issueAccessor');

const SaveIssueDetail = (issuedetail,cb)=>{
    
    if(issuedetail.id){
        IssueAccessor.SaveIssueDetail(issuedetail,function(errSER,argSER){
           (errSER)?cb(errSER):cb(undefined,argSER);
         })
    }else{
        cb("error");
    }   
  }

  module.exports = {
      SaveIssueDetail
  }