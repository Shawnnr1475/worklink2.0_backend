const express = require("express")
const app = express()
const PORT = 5000
const mongoose =  require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const clientRoutes =  require("./routes/clientroutes")
const dotenv = require("dotenv")
dotenv.config()
const ConnectToDB = async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_ACCESS)
        console.log("Database Connected")
    }catch(e){
        console.log("Can not connect to database")
    }
}

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(clientRoutes)

app.listen(PORT, ()=>{
    ConnectToDB()
    console.log(`Now serving at port ${PORT}`)
})