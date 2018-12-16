const mongoose = require('mongoose');

let Schema = mongoose.Schema({
    foodid:String,    
    weight:Number,       
    date: { type: Date, default: Date.now },
    user:String

})

module.exports = mongoose.model("DailyItem", Schema);