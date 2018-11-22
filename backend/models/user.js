const mongoose = require('mongoose');

let Schema = mongoose.Schema({
    username:{type:String,unique:true},
    password:String,
    email:String,
    gender:String,
    age:Number,
    heigth:Number,
    weight:Number

})

module.exports = mongoose.model("User", Schema);