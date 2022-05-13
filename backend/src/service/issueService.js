
const IssueAccessor = require('../accessor/issueAccessor');

const SaveIssueDetail = (issuedetail,cb)=>{
    // console.log('service',Object.entries(issuedetail).map((data1,ind)=>{return data1[1]}));
    let issuedetailall = Object.entries(issuedetail).map((data1,ind)=>{return data1[1]});
    // console.log("issuedetailall",issuedetailall);
    // if(issuedetail.id){
    if(issuedetailall){
        // console.log("hhh service",issuedetailall);
        IssueAccessor.SaveIssueDetail(issuedetailall,function(errSER,argSER){
            // console.log("service",errSER,argSER);
           (errSER)?cb(errSER):cb(undefined,argSER);
         })
    }else{    
        console.log("Error");
        cb("error");
    }   
  }

  module.exports = {
      SaveIssueDetail
  }