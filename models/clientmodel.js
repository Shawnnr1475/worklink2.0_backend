const mongoose = require("mongoose");
 
// create an schema
var clientSchema = new mongoose.Schema({
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
            }
        });
 

 
module.exports = mongoose.model("client", clientSchema);