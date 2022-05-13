const mongoose = require('mongoose');
const { Schema } = mongoose;

const arraySchema = new Schema({
    rk : { type : Array , "default" : [] }
})
const IssueSchema = new Schema({
    created_at: String,
    id : Number,
    state : String,
    closed_at : String,
    number : Number,
    url : String,
    repository_url : String,
    labels_url : String,
    assignee : String
})

const LabelsSchema = new Schema({
    id : Number,
    description : String,
    node_id : String,
    url : String
})

const AssigneesSchema = new Schema({
    id : Number,
    node_id : String,
    type : String
})

module.exports={
    IssueSchema,
    LabelsSchema,
    AssigneesSchema,
    arraySchema
};