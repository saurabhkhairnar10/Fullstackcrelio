const userModel = require('../db/models/userModels').userModels;

const getUserByEmail = (email, userCB) => {
    userModel.findOne({email: email}).exec(userCB);
}

const SaveUserDetail = (userdetail,cbAccessor)=>{

    const userModelSave = new userModel(userdetail);

    userModelSave.save(cbAccessor);  
}

const updateUserDetail = (filter, update, updateCB) => {
    userModel.findOneAndUpdate(filter, update, updateCB);
}

module.exports = {
    SaveUserDetail,
    getUserByEmail,
    updateUserDetail
}