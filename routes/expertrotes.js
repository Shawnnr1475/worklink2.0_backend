const express = require("express")
const router = express.Router()
const expertSchema = require("../models/expertmodel")
const path = require("path")
const bcrypt =  require("bcrypt")

const multer = require("multer")
const storage = multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, "../profilepics")
    },
    filename : (req,file,cb)=>{
        cb(null, Date.now + path.extname(file.originalname))
    }
})
const upload =  multer({
    storage:storage,
    fileFilter: (req,file,cb)=>{
        if(file.mimetype === "image/png" || file.mimetype === "image/jpg"){
            cb(null,true)
        }
        else{
            cb(null,false)
        }
    },
    limits: 1024 * 1024 * 4
})


router.get("/experts",async(req,res)=>{
    await expertSchema.find({},(err,docs)=>{
        if(!err){
            res.json(docs)
        }
        else{
            res.json(err)
        }
    })
    
})


router.post("/expert/register", upload.single("profilepic"), async(req,res)=>{
    await bcrypt.hash(req.body.password,10).then((hash)=>{
        let filepath = ""
        if(req.file){
            filepath = req.file.path
        }
        const newExpert = new expertSchema({
            profilepic: filepath,
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