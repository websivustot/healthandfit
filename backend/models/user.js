const mongoose = require('mongoose');

let Schema = mongoose.Schema({
    username:{type:String,unique:true},
    password:String,
    email:String,
    gender:Boolean,
    age:Number,
    height:Number,
    weight:Number,
    activity:Number,
    needs:Number

})

module.exports = mongoose.model("User", Schema);