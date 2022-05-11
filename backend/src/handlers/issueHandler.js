const issueService = require('../service/issueService');

const axios = require('axios');
// const {got} = require("got");

const SaveIssueDetail = async(req, res)=>{
    console.log('Inside Function')
    const res1 = await axios.get('https://api.github.com/repos/pallets/click/issues?state=closed')

// const res2 = await res1.json();
        console.log("--resp",res1);
        // res.json({
        //     "resp" : JSON.stringify(resp)
        // });
    //     const {resp} = await got.get('https://api.github.com/repos/pallets/click/issues?state=closed').json();

    // console.log(resp,"resp")

    
 const Issue = {   
        created_at : res1.created_at,
        id : res1.id,
        state : res1.state,
        closed_at : res1.closed_at,
        number : res1.number,
        url : res1.url,
        repository_url : res1.repository_url,
        labels_url : res1.labels_url
}
issueService.SaveIssueDetail(Issue,function (err,arg){
    if(err){
        res.status(409).send("E11000 duplicate key error collection");
    }else{
        res.status(200).send(arg);
    }
    console.log("--arg",Issue)
})
}

module.exports = {
    SaveIssueDetail
}
