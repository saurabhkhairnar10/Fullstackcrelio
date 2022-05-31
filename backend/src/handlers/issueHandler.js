const issueService = require('../service/issueService');
const axios = require('axios').default;


const SaveIssueDetail = async(req,res)=>{
    // console.log('Inside Function');
    const res1 = await axios.get('https://api.github.com/repos/pallets/click/issues?state=all');
    
    const githubIssues = Object.entries(res1.data).map((oup,ind)=>{
        const [_, issue] = oup;
        // console.log(issue.repository_url);
        const Issues = {   
            created_at : issue.created_at,
            id : issue.id,  
            state : issue.state,
            closed_at : issue.closed_at,
            number : issue.number,
            url : issue.url,
            repository_url : issue.repository_url,
            labels_url : issue.labels_url,
            assignee : issue.assignee
    }

        return Issues;

    });
    // console.log(githubIssues);
    // console.log("--resp",typeof(res1));

// res.status(200).send(githubIssues);
issueService.SaveIssueDetail(githubIssues,function (err,arg){
    // console.log("saveissuedet",githubIssues);
    if(err){
        // res.status(409).send("E11000 duplicate key error collection");
        res.status(200).send(githubIssues);
    }else{
        res.status(200).send(arg);
    }
    // console.log("--arg",githubIssues);
})
}

module.exports = {
    SaveIssueDetail
}
