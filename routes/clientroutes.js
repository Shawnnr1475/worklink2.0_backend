const express = require("express")
const router = express.Router()
const bcrypt =  require("bcrypt")
const clientSchema = require("../models/clientmodel")

router.get("/",(req,res)=>{
    res.json("Hello world")
})

router.get("/client",async(req,res)=>{
    clientSchema.find({email:req.body.email},(err,docs)=>{
        if(!err){
            res.json(docs)
        }
        else{
            res.json(err)
        }
    })
    
})

router.post("/client/register", async(req,res)=>{
    // let password = ""
    // await bcrypt.hash(req.body.password, 10).then(function(hash) {
    //     password = hash
    // });
    new clientSchema({
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        cell: req.body.cell,
        address: req.body.address,
        coordinates: req.body.coordinates,
        password: req.body.password
    }).save((err,docs)=>{
        if(!err){
            res.json(docs)
        }
        else{
            console.log(err)
        }
    })
})
module.exports = router