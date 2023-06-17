const express = require('express');
const app = express();
const PORT = 6378
const mongoose =require('mongoose');



 mongoose.connect("mongodb+srv://user1:user1@meskvm.bdjmizb.mongodb.net/")
 .then(()=>{console.log("MongoDB connected successfully")})
 .catch((err)=>{console.log("Error connecting to MongoDB"+err)});

 app.get('/',(req,res)=>{
    res.send('server is starting')
 })
 app.get('/about',(req,res)=>{
    res.send('this is about page>')
 })
 app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);

 });
