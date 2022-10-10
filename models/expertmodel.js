const mongoose = require("mongoose");
 
// create an schema
var expertSchema = new mongoose.Schema({
            profilepic:{
                type:String
            },
            name: {
                type: String,
                required: true 
            },
            surname:{
                type: String,
                required: true  
            },
            cell:{
                type: String,
                required: true
            },
            address:{
                type:String,
                required:true
            },
            coordinates: {
                type: Array,
                required:true
            },
            email:{
                type:String,
                require:true
            },
            password:{
                type:String,
                required:true
            },
            date:{
                type: Date,
                default: Date.now()
            }
        });
 

 
module.exports = mongoose.model("expert", expertSchema);