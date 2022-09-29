
const express= require('express');
const app=express();
const PORT= 5000;
const mongoose= require('mongoose');
const {MONGOURI}= require('./keys');

require('./Models/User')
require('./Models/Group')


app.use(express.json());
app.use(require('./Routes/auth'));
app.use(require('./Routes/post'));

mongoose.connect(MONGOURI);
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo")
})
 
mongoose.connection.on('error',(err)=>{
    console.log("connecting",err)
})



app.listen(PORT,()=>{
    console.log("serveris running",PORT);
})







