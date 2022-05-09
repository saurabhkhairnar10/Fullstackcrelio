const userService = require('../service/userService');

const SaveUserDetail = (req,res)=>{

    const User ={
        name: req.body.name, 
        email: req.body.email, 
        password: req.body.password,
    }

    userService.SaveUserDetail(User,function (err,arg){
        if(err){
            res.status(409).send("E11000 duplicate key error collection");
        }else{
            res.status(200).send(arg);
        }
    })
}

const Login = (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    userService.Login(email,password, function(errLogin,token){
        if(errLogin){
            res.status(401).send(errLogin);
        }else{
             res.send(200).send(token);
        }
    }
    )
}

module.exports = {
    SaveUserDetail,
    Login
}