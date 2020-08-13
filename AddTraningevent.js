const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainingeventSchema = new Schema({
    yearofpassing: {
        type: Number,
        required: true,
        unique: true
    },
    name_of_program:{
        type:String,
        required:true
    },
    from_date: {
        type:Date,
        required: true
    },
    to_date : {
        type:Date,
        required:true
    }
},{
    timestamps: true
});

var TrainingeventSchema = mongoose.model('Login', trainingeventSchema);

module.exports = TrainingeventSchema;