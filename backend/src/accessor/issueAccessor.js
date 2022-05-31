const issueModel = require('../db/models/issueModels').issueModels;
const arrayModel = require('../db/models/issueModels').arrayModels
const SaveIssueDetail = (issuedetail,cbAccessor)=>{
    // console.log("--issuedetail",issuedetail[0]);

    const issueModelSave = new issueModel(issuedetail[0]);
    console.log("issuemodelsave",issueModelSave);
    issueModelSave.save(cbAccessor);  
}

module.exports ={
    SaveIssueDetail
}