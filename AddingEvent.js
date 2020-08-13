const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addEventSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    location:{
        type:String,
    },
    From:{
        type:Date,
        required:true,
    },
    To:{
        type:Date,
        required:true
    },
    Description:{
        type:String
    }

},{
    timestamps: true
});

var AddingEvent = mongoose.model('Login',addEventSchema);

module.exports = AddingEvent;