const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AreCocubesSchema = new Schema({
    user_id:{
        type:Number,
        required:true,
        unique:true
    },
    Assessment_partener:{
        default:'CoCubes'
    },
    Assessment_Date:{
        type:Date,
        required:true
    },
    Assessment_Id:{
        type:Number,
        required:true,
        unique:true
    },
    Overall_aptitude:{
        type:Number,
        required:true
    },
    English:{
        type:Number,
        required:true
    },
    Quantitative:{
        type:Number,
        required:true
    },
    Analytical:{
        type:Number,
        required:true
    },
    Domain:{
        type:Number,
        required:true
    },
    Computer_Fundamentals:{
        type:Number,
        required:true
    },
    Coding:{
        required:true,
        type:String
    },
    WET:{
        type:String,
        required:true
    },
    Personality:{
        type:String,
        required:true
    },
    Over_all_score:{
        type:Number,
        required:true,
        unique:true
    },
    Over_all_rank:{
        type:Numver,
        required:true,
        unique:true
    }

},{
    timestamps: true
});
var AreCocubes = mongoose.model('Login',AreCocubesSchema);
module.exports = AreCocubes;