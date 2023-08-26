const express = require("express");
const app = express();
const mongoose = require("mongoose")
const cors=require('cors')
require("dotenv").config()

app.use(cors())
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });
app.use(express.json());

const userRoute = require("./routes/userRoute")
const {exerciseRouter}=require("./routes/exerciseRoute")
const {yogaRoute}=require("./routes/yogaRoute")
const {productRoute}=require('./routes/productRoute')

app.get("/",(req,res)=>{

    res.send("welcome");
})

app.use("/users",userRoute)
app.use("/products",productRoute)


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