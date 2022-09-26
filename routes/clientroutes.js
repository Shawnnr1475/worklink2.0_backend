const express = require("express")
const router = express.Router()
const clientSchema = require("../models/clientmodel")

router.get("/",(req,res)=>{
    res.json("Hello world")
})

router.get("/clients",async(req,res)=>{
    clientSchema.find({},(err,docs)=>{
        if(!err){
            res.json(docs)
        }
        else{
            res.json(err)
        }
    })
    
})

module.exports = router