const issueModel = require('../db/models/issueModels').issueModels;
const SaveIssueDetail = (issuedetail,cbAccessor)=>{
    console.log("--issuedetail",issuedetail)

    const issueModelSave = new issueModel(issuedetail);

    issueModelSave.save(cbAccessor);  
}

module.exports ={
    SaveIssueDetail
}