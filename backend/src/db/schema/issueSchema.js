const mongoose = require('mongoose');
const { Schema } = mongoose;

const IssueSchema = new Schema({
    created_at: Number,
    id : Number,
    state : String,
    closed_at : Number,
    number : Number,
    url : String,
    repository_url : String,
    labels_url : String 
})

module.exports={
    IssueSchema
};