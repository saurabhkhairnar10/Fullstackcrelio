const mongoose = require('mongoose');
const IssueSchema = require('../schema/issueSchema').IssueSchema;
const ArraySchema = require('../schema/issueSchema').arraySchema;

const issueModels = mongoose.model('issues',IssueSchema);
const arrayModels = mongoose.model('arrays',ArraySchema);


module.exports = {
    issueModels,
    arrayModels
}
