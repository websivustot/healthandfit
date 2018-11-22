const express = require("express");
const bodyParser = require("body-parser");
const shoppingrouter = require("./routes/shoppingrouter");
const mongoose = require("mongoose")
const userModel = require("./models/user")
const bcrypt = require("bcrypt-nodejs")



let app = express();
app.use(bodyParser.json());
//user databases

mongoose.connect("mongodb://localhost/healthandfitdatabase").then(
    () => {console.log("connection to Mongodb successful")},
    (error) => {console.log("Connection to Mongodb failed:"+error)}
);

let loggedUsers = [];

function createSaltedPassword(pw) {
    return bcrypt.hashSync(pw,bcrypt.genSaltSync(8),null);
}

function isPasswordValid(pw,hash) {
    return bcrypt.compareSync(pw,hash);
}

app.post("/login", function(req,res){

    if(!req.body.username || !req.body.password){
        return res.status(409).json({"message":"provide credentials"})
    }
    if(req.body.username.length ===0 || req.body.password.length ===0){
        return res.status(409).json({"message":"provide credetials"})
    }

    userModel.findOne({"username":req.body.username},function(err,user){
        if(err){
            res.status(403).json({"message":"wrong credentials"})
        }
        if(!user){
            res.status(403).json({"message":"wrong credentials"})
        }
        if(isPasswordValid(req.body.password, user.password)){
            let token = createToken();
            loggedUsers.push({
                "username":user.username,
                "token":token
            })
            return res.status(200).json({
                "token":token
            })
        }
        res.status(403).json({"message":"wrong credentials"});
    });
    
});

app.post("/register", function(req,res){

    //console.log("req.body"+req.body);

    if(!req.body.username || !req.body.password){
        return res.status(409).json({"message":"provide credentials"})
    }
    if(req.body.username.length ===0 || req.body.password.length ===0){
        return res.status(409).json({"message":"provide credetials"})
    }
    let user = new userModel({
        "username":req.body.username,
        "password":createSaltedPassword(req.body.password)
    })

    user.save(function(err){
        if(err){
            return res.status(409).json({"message":"username already in use"})
        }   
        res.status(200).json({"message":"success"});     
    })
    
    
});

function isUserLogged(req,res,next){
    let token = req.headers.token;
    for(let i=0;i<loggedUsers.length;i++){
        if(token === loggedUsers[i].token){
            req.username = loggedUsers[i].username;
            return next();
        }
    }
    res.status(403).json({"message":"not allowed"});
}

function createToken(){
    let token = "";
    let letters = "abcdefghijABCDEFGHIJ1234567890";
    for(let i=0;i<1024;i++){
        let temp = Math.floor(Math.random()*30);
        token = token+letters[temp];
    }
    return token;
}

app.use("/api", isUserLogged, shoppingrouter);

//app.listen(3001 || process.env.PORT)
app.listen(3001);
console.log("Running in port 3001");