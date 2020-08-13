const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AcademicdetailSchema = new Schema({
    user_id:{
        type:Number,
        required:true,
        unique:true
    },
    Section:{
        type:String,
        required:true
    },
    Year_of_passing:{
        type:Date,
        required:true
    },
    SSC_results:{
        type:String,
        required:true,
    },
    INTER:{
        type:String,
        required:true,
    },
    Btech_CGPA:{
        type:String,
        required:true,
    },
    Pass_category:{
        type:String,
        required:true
    },
    Active_Backlogs:{
        type:Number,
        required:true
    }

},{
    timestamps: true
});

var AcademicDetail = mongoose.model('Login',AcademicdetailSchema);

module.exports = AcademicDetail;