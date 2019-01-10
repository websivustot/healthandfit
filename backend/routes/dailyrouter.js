const express = require("express");
const mongoose = require("mongoose");
const dailyItem = require("../models/dailyitem");

let router = express.Router();

router.get("/daily", function(req,res){
    dailyItem.find(function(err,items){
        if(err){
            res.status(404).json({"message":"dailylist not found"})
        }
        if(!items){
            res.status(404).json({"message":"dailylist not found"})
        }
        return res.status(200).json(items);
    })
    
})

router.get("/daily/:username", function(req,res){    
    dailyItem.find({"user":req.params.username},function(err,items){
        if(err){
            res.status(404).json({"message":"dailylist not found"})
        }
        if(!items){
            res.status(404).json({"message":"dailylist not found"})
        }
        return res.status(200).json(items);
    })
    
})

router.post("/daily", function(req,res){
    let item = new dailyItem({        
        foodid:req.body.foodid,    
        weight:req.body.weight,        
        date: req.body.date,
        user:req.body.user,        
        foodname:req.body.foodname,
        energy:req.body.energy,
        carbo:req.body.carbo,
        fat:req.body.fat,
        proteine:req.body.proteine
    })
    item.save(function(err){
        if (err){
            return res.status(409).json({"message":"item not saved"})
        }
        return res.status(200).json({"message":"success"});
    })   
     
})

router.delete("/daily/:id", function(req,res){
    foodItem.deleteOne({"_id":req.params.id}, function(err){
        if(err){
            return res.status(404).json({"message":"not found"});
        }
        return res.status(200).json({"message":"success"})
    })    
    
})

module.exports = router;