const express = require("express")
const router = express.Router()
const expertSchema = require("../models/expertmodel")


router.get("/experts",async(req,res)=>{
    expertSchema.find({},(err,docs)=>{
        if(!err){
            res.json(docs)
        }
        else{
            res.json(err)
        }
    })
    
})

module.exports = router