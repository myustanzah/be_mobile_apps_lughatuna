if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

const express = require("express");
const app = express();
const cors = require("cors");


app.use(cors());
app.use(express.json({limit: '10mb', extended: true}))
app.use(express.urlencoded({limit: '10mb', extended:true, parameterLimit: 50000}))
app.use(express.static('public')); 
app.use('/images', express.static('images'));

app.get("/", (req, res)=> {
    res.json("OK")
})

module.exports = app