const mongoose = require('mongoose');

let Schema = mongoose.Schema({
    foodid:String,    
    weight:Number,       
    date: { type: Date, default: Date.now },
    user:String,
    foodname:String,
    energy:Number,
    carbo:Number,
    fat:Number,
    proteine:Number

})

module.exports = mongoose.model("DailyItem", Schema);