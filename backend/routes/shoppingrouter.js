const express = require("express");

let router = express.Router();

//database

let database = [
    {
        "id":99,
        "type":"Banana",
        "count":2,
        "price":3
    }
];
let id = 100;

router.get("/shopping", function(req,res){
    res.status(200).json(database);
})

router.post("/shopping", function(req,res){
    let item = {
        id:id,
        type:req.body.type,
        count:req.body.count,
        price:req.body.price
    }
    id++;
    database.push(item);
    console.log(database);
    res.status(200).json({"message":"success"}); 
})

router.delete("/shopping/:id", function(req,res){
    let tempId = parseInt(req.params.id,10);
    for (let i=0;i < database.length;i++){
        if (database[i].id === tempId) {
            database.splice(i,1);
            return res.status(200).json({"message":"success"})
        }
    }
    res.status(404).json({"message":"not found"});
})

module.exports = router;