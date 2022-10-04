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

router.post("/client/signin" , async(req,res)=>{
    try{
        clientSchema.findOne({email:req.body.email},(err,docs)=>{
            if(!err){
                bcrypt.compare(req.body.password, docs.password, function(err, result) {
                    if(result){
                        res.json(docs)
                    }
                    else{
                        res.json({message:"Incorrect Password"})
                    }
                });
            }
            else if(docs === {}){
                res.json({message:"Not found"})
                res.status = 200
            }
        })
    }catch(err){
        console.log(err)
    }
})

router.post("/client/register", async(req,res)=>{
    await bcrypt.hash(req.body.password,10).then((hash)=>{
        const newClient = new clientSchema({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            cell: req.body.cell,
            address: req.body.address,
            coordinates: req.body.coordinates,
            password: hash
        }).save((err,docs)=>{
            if(!err){
                res.json(docs)
            }
            else{
                console.log(err)
            }
        })
    });

})
module.exports = router