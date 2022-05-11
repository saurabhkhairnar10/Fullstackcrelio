const mongoose = require('mongoose');
const IssueSchema = require('../schema/issueSchema');

const issueModels = mongoose.model('issue',IssueSchema);

module.exports = {
    issueModels
}
