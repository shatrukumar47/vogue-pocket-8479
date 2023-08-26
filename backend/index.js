const express = require("express");


var cookieParser = require('cookie-parser');

const app = express();
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

app.use(express.json());

app.use(cors())

app.use(cookieParser());


const userRoute = require("./routes/userRoute")
const {exerciseRouter}=require("./routes/exerciseRoute")
const {yogaRoute}=require("./routes/yogaRoute")
app.use("/exercise",exerciseRouter)
app.use("/yoga",yogaRoute)

app.get("/",(req,res)=>{

    res.send("welcome");
})

app.use("/users",userRoute)
app.use("/exercise",exerciseRouter)

const connect = async()=>{

    try {
        
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected")

    } catch (error) {
        
        console.log(error)
    }
}
app.listen(process.env.PORT,()=>{

    connect();

    console.log("listen")
})

module.exports = app