const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AreCocubesSchema = new Schema({
    Company_id:{
        required:true,
        type:Number,
    },
    Company_Name:{
        required:true,
        type:String
    },
    Company_official_website:{
        required:true,
        type:String,
    },
    Employee_strength:{
        required:true,
        type:String
    },
    Annual_turnover:{
        required:true,
        type:Number
    },
    About_the_comapny:{
        required:true,
        type:String
    },
    Analytical:{
        type:String,
        required:true
    },
    HR_Name:{
        type:String,
        required:true,
    },
    Technicial_interviewer_name:{
        type:String,
        required:true,
    },
    Recruitment_Date:{
        required:true,
        type:Date
    }
},{
    timestamps: true
});
var AreCocubes = mongoose.model('Login',AreCocubesSchema);
module.exports = AreCocubes;