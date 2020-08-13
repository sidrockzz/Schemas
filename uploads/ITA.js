const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ITASchema = new Schema({
    user_id:{
        type:Number,
        required:true,
        unique:true
    },
    Name_of_the_training_programme:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        required:true
    }

},{
    timestamps: true
});
var ITA = mongoose.model('Login',ITASchema);
module.exports = ITA;