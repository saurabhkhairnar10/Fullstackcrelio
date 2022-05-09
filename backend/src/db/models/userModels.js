const mongoose = require('mongoose');
const UserSchema = require('../schema/userSchema').UserSchema;

// users is the collection name
const userModels = mongoose.model('users',UserSchema);


module.exports = {
    userModels
}