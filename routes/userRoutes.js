
const express = require('express');
const User = require('../models/userModel');



const app = express.Router();


app.post('/login', async(req,res) =>{

    const {username,password,email} = req.body



    try{
      const result = await User.findOne({email}).exec((err,res)=>{

        if(!result){
            return err
        }


        res.json({
            msg:'successful login',
            user:result
        })
      })
    }

    catch(error){

        return res.status(404).json({
            msg:`User is not found ${error} is found`
        })


    }


})


app.post('/register', async (req,res) =>{


    const findUser = User.findOne({email}).exec((err,res)=>{

        console.log(`user has been found ${res}`)
    })

    if(findUser){
        return console.log('user found')
    }



        const newUser =  new User(req.body);
        await newUser.save()


        res.status(200).json({
            msg:'the user is saved',
            newUser,
        })
    
})



module.exports = app