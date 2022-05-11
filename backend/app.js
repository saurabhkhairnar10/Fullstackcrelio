const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');


const userroute = require('./src/routes/userRoute');
const authenticationRoute = require('./src/routes/authenticationRoute');
const issueroute = require('./src/routes/issueRoute');



const username = process.env.MONGO_USERNAME || 'saurabh10';
const password = process.env.MONGO_PASSWORD || 'MONGODB';
const database = "FULLSTACKTASK";

app.use(bodyparser.json());



const connectionLink = `mongodb+srv://${username}:${password}@cluster0.qvteq.mongodb.net/${database}?retryWrites=true&w=majority`;

mongoose.connect(connectionLink).then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(`connection failed`);
})

app.get('/',(req,res)=>{
return res.send("response");
})
app.use('/datafetch', function(req, res, next) {
    // res.send('Working');
    res.send("properly working");
});

app.use('/users',userroute);
app.use('/auth', authenticationRoute);
app.use('/issues',issueroute);
    
app.listen(5000,()=>{
    console.log(`server is running on port 5000`);
})
module.exports=app;
// const middleware = (req,res,next)=>{
//     console.log("Middleware");
//     next();
// }

// app.get('/main1',middleware,(req,res)=>{
    //     console.log("Main");
    //     return res.send('response from main page');
    // })
    