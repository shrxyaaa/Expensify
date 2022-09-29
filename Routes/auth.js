const express = require('express')
const router = express.Router()
const  mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const {JWT_SECRET}= require('../config/keys')
const requreLogin= require('../middleware/requreLogin')

router.post('/signup',(req,res)=>{
   const{name,email,password}=req.body
   if(!name||!email||!password){
       res.status(422).json({error:"enter all the fields"})
   }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"User already exist"})
        }
        bcrypt.hash(password,1)
        .then(hashedPassword=>{
           const user=new User({
            email,
            password:hashedPassword,
            name
           })
    
           user.save()
           .then(user=>{
                 res.json({message:"Saved successfully"})

           })
           .catch(err=>
            {console.log(err)
            }) 

    })
 }) .catch(err=>{
        console.log(err)
    })


});

router.post('/signin',(req,res)=> {
    const{email,password}= req.body
    if(!email||!password){
        res.status(422).json({error:"enter all the fields"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(!savedUser){
            return res.status(422).json({error:"Incorrect email"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(matched=>{
            if(matched){
                const token= jwt.sign({_id:savedUser._id},JWT_SECRET)
                const {_id,name,dp,email,password,groups}= savedUser
                return res.json({token,user:{_id,name,dp,email,password,groups}})
 
            }
            else{
                return res.json({error:"Incorrect Password"})
            }
        }).catch(err=>{console.log(err)})
}) 

});

router.post('/logOut',(req,res)=>{
    
})

module.exports = router;
