const mongoose = require('mongoose');
const Schema = mongoose.Schema
const userSchema = new Schema({
    Username: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique:true
    },
    Phone:{
        type:Number,
        required:true,
        unique:true
    },
    Firstname:{
        type:String,
        required:true
    },
    Lastname:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
})

const userModel = mongoose.model('register',userSchema);

module.exports=userModel;