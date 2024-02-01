const mongoose = require("mongoose");
 
// create an schema
var uploadsSchema = new mongoose.Schema({
        filename: String,
        data: Buffer
    });
 

 
module.exports = mongoose.model("upload",uploadsSchema);