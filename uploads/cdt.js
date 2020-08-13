const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cdtSchema = new Schema({
    user_id:{
        type:Number,
        required:true,
        unique:true
    },
    Company_id:{
        type:Number,required:true,
        unique:true
    }

},{
    timestamps: true
});
var CDT = mongoose.model('Login',cdtSchema);
module.exports = CDT;