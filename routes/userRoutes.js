
const express = require('express');
const User = require('../models/userModel');



const app = express.Router();


app.post('/login', async(req,res) =>{

    console.log(req.body)

    console.log('hello')
    const {password,email} = req.body



    try{
      const result = await User.findOne({email})

       result.password = null

      if(result)(

        res.status(200).json({
            msg:'successful login',
            user:result
        })
      
    

      )
    }

    catch(error){

        return res.status(404).json({
            msg:`User is not found ${error} is found`
        })


    }


})


app.post('/register', async (req,res) =>{

    const {username,password,email} = req.body


    console.log(email)

    const findUser =  await User.findOne({email})


    if(findUser){
        return res.status(304).json({
            msg:'User was found'
        })
    }
  

    console.log(findUser)
  


        const newUser =  new User(req.body);
        await newUser.save((err,user) =>{

            res.status(200).json({
                msg:'the user is saved',
                user,
            })
        })



    
})


app.post("/update", async (req,res) => {

    console.log(req.body,'this the backend')

    try{

        console.log('hello')

        await User.findByIdAndUpdate({_id : req.body._id}, req.body);

        const user = await User.findOne({_id : req.body._id});

     
        res.send(user)

    }

    catch(error){
        res.status(400).json(error)
    }









})



module.exports = app