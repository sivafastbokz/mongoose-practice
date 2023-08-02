const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const markSchema = new mongoose.Schema({
    title:{
       type:String,
       required:true
    },
    studentName:{
        type:String,
        required:true
    },
    english:{
        type:Number,
        required:true,
        max:[100,'invalid mark']
    },
    tamil:{
        type:Number,
        required:true,
        max:[100,'invalid mark']
    },
    maths:{
        type:Number,
        required:true,
        max:[100,'invalid mark']
    },
    science:{
        type:Number,
        required:true,
        max:[100,'invalid mark']
    },
    social:{
        type:Number,
        required:true,
        max:[100,'invalid mark']
    },
    student:{
        type:Schema.Types.ObjectId,
        ref:'userdatas'
    }

})

const marks = mongoose.model('marklists',markSchema);
module.exports = marks