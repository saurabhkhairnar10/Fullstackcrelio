const jwt = require('jsonwebtoken');
const SECRETKEY = 'AUTHENTICATION_KEY';
const UserAccessor = require('../accessor/userAccessor');

const SaveUserDetail = (userdetail,cb)=>{
    // console.log("usrdetail",userdetail);
    if(userdetail.name && userdetail.password && userdetail.email){
         UserAccessor.SaveUserDetail(userdetail,function(errSER,argSER){
           (errSER)?cb(errSER):cb(undefined,argSER);
         })
    }else{
        cb("error");
    }   
  
  }

  const Login =(email,password,cb)=>{
    UserAccessor.getUserByEmail(email,function(errLOGIN,userDetailLogin){
        if(typeof errLOGIN !== 'undefined' && errLOGIN !== null){
          cb(errLOGIN);
        }else{
          if(userDetailLogin.password === password){
            let data = {
              email : email
            };
            const token= jwt.sign(data,SECRETKEY);
           //  console.log("token",token);
           //  if(typeof errLOGIN !== 'undefined' && typeof errLOGIN !== null){
           //     cb(errLOGIN);
           //  }else{
           //    cb(undefined,token);
           //  }
           UserAccessor.updateUserDetail({email:email},{token:token},function(Errupdate,userDetailLogin){
               if(Errupdate){
                 cb(Errupdate);
               }else{
                 userDetailLogin.token = token;
                 cb(undefined,userDetailLogin);
               }
           })
          }else{
            cb("Password Does not match");
          }
        }
    })
 }
 
 module.exports = {
     SaveUserDetail,
     Login
 }