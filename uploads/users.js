const mongoose = require('mongoose');
const { truncate } = require('fs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    CampusId:{
        type:Number,
        required:true,
        unique:true
    }
},{
    timestamps: true
});

var users = mongoose.model('Login', userSchema);

module.exports = users;