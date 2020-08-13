const mongoose = require('mongoose');
const { truncate } = require('fs');
const Schema = mongoose.Schema;

const personaldetailsSchema = new Schema({
    user_id:{
        type:Number,
        required:true,
        unique:true
    },
    First_name:{
        type:String,
        required:true
    },
    Middle_name:{
        type:String
    },
    Last_name:{
        type:String,
        required:true
    },
    DOB:{
        type:Date,
        required:true
    },
    BooldGroup:{type:String},
    Permanent_address:{type:String,required:true},
    phone_number:{
        type:Number,
        required:true,
        unique:true
    },
    Email_id:{
        type:String,
        required:true
    },
    Father_name:{
        type:String,
        required:true
    },
    Father_Occupation:{
        type:String,
        required:true
    },
    Father_contact_number:{
        type:String,
        required:true
    },
    Mother_name:{
        type:String,
        required:true
    },
    Mother_Occupation:{
        type:String
    },
    Reservation_Category:{
        type:String,
        required:true
    }

},{
    timestamps: true
});

var PersonalDetail = mongoose.model('Login', personaldetailsSchema);

module.exports = PersonalDetail;