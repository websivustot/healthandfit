const mongoose = require('mongoose');

let Schema = mongoose.Schema({
    foodname:{type:String,unique:true},    
    energy:Number,
    carbohydrate:Number,
    fat:Number,
    protein:Number,
    date: { type: Date, default: Date.now },
    user_id:Number

})

module.exports = mongoose.model("FoodItem", Schema);