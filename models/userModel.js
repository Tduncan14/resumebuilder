const mongoose = require('mongoose');
const crypto = require('crypto')


const userSchema = new mongoose.Schema({

    username:{
        type:String,
        required:true,
        trim:true
    },


    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },

    password:{
        type:String,
        require:true,
        trim:true
    },

    firstName:{
        type:String,
        default:'',
    },

    lastName:{
        type:String,
        default:''
    },
    email:{
        type:String,
        default:''
    },
    portfolio:{
        type:String,
        default:''
    },
    careerObjective:{
        type:String,
        default:''
    },
    mobileNumber:{
      type:String,
      default:''
    },
    education:{type:Array, default:[]},
    skills:{type:Array, default:[]},
    experience:{type:Array, default:[]},
    projects:{type:Array, default:[]}



},{timestamps:true})


// userSchema.virtual('password')
// .set(function(password){
//     this._password = password
//     // generat salt for the password
//     this.salt = this.makeSalt()


//     this.hashed_password = this.encryptPassword(password)
// })
// .get(function(){

//     return this._password
// })


// // this is the methods for the getter and setters
// userSchema.methods ={

//     authenicate:function(plainPassword){

//         return this.encryptPassword(plainPassword) === this.hashed_password
//     },

//     encryptPassword:function(password){

//         if(!password){
//             return ''
//         }

//         try{

//             return crypto.createHmac('sha1', process.env.JWT_SECRET)
//             .update(password)
//             .digest(hex)


//         }


//         catch(err){
//             return err
//         }


//     },


//     makeSalt:function(){
//         return Math.round(new Date().valueOf()*Math.random())+ ''
//     }



// }
 
const User = userSchema

module.exports = mongoose.model('user',User)