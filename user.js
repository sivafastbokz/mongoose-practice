const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        maxLength:[12,'characters should be less than 12']
    },
    userAge:{
        type:Number,
        required:true,
        min:[18,' Age Must be 18 & Above'],
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
    },
    isActive:{
        type:Boolean,
        required:true
    },
    Favdrink:{
        type:String,
        enum:['Tea','Coffee'],
        required:true
    },
    prevSchool:{
        type:mongoose.Schema.Types.Mixed,
        required:true
    },
    GradeRating:{
        type:Map,
        of:String
    }
})

const userModel = mongoose.model('userdatas',userSchema);
module.exports = userModel