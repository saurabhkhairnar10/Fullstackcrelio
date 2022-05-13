const issueModel = require('../db/models/issueModels').issueModels;
const arrayModel = require('../db/models/issueModels').arrayModels
const SaveIssueDetail = (issuedetail,cbAccessor)=>{
    console.log("--issuedetail",issuedetail[0]);
    let savedata = new issueModel(issuedetail[0]).save(function(err, result) {
        if (err) throw err;

        if(result) {
            console.log("result",result);
            // res.json(result)
        }
    })

    const issueModelSave = new issueModel(issuedetail[0]);
    // console.log("issuemodelsave",issueModelSave);
    issueModelSave.save(cbAccessor);  
}

module.exports ={
    SaveIssueDetail
}