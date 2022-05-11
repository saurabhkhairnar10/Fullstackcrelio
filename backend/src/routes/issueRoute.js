const express = require('express');
const router = express.Router();
const issuehandler = require('../handlers/issueHandler');

router.post('/issues',issuehandler.SaveIssueDetail);

module.exports=router;
