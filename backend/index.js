const express = require("express");
const app = express();
const mongoose = require("mongoose")
require("dotenv").config()
app.use(express.json());

const userRoute = require("./routes/userRoute")

app.get("/",(req,res)=>{

    res.send("welcome");
})

app.use("/users",userRoute)


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