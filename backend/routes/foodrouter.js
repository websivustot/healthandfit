const express = require("express");
const mongoose = require("mongoose");
const foodItem = require("../models/fooditem");

let router = express.Router();

router.get("/food", function(req,res){
    foodItem.find(function(err,items){
        if(err){
            res.status(404).json({"message":"foodlist not found"})
        }
        if(!items){
            res.status(404).json({"message":"foodlist not found"})
        }
        return res.status(200).json(items);
    })
    
})

router.post("/food", function(req,res){
    let item = new foodItem({        
        foodname:req.body.foodname,    
        energy:req.body.energy,
        carbohydrate:req.body.carbohydrate,
        fat:req.body.fat,
        proteine:req.body.proteine,
        date:req.body.date,
        user:req.body.user
    })    
    item.save(function(err){
        if (err){            
            return res.status(409).json({"message":"item not saved"})
        }
        return res.status(200).json({"message":"success"});
    })   
     
})

router.delete("/food/:id", function(req,res){
    foodItem.deleteOne({"_id":req.params.id}, function(err){
        if(err){
            return res.status(404).json({"message":"not found"});
        }
        return res.status(200).json({"message":"success"})
    })    
    
})

module.exports = router;