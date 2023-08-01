const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    userAge:{
        type:Number,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:()=> Date.now()
    },
    hobbies:{
        type:[String],
        required:true
    },
    address:{
        street:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        }
    }
})

const userModel = mongoose.model('userdatas',userSchema);
module.exports = userModel