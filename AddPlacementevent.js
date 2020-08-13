const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addplacementSchema = new Schema({
    name_of_company:{
        type:String,
        required:true
    },
    date: {
        type:Date,
        required: true
    },
    CTC : {
        type:String,
        required:true
    }
},{
    timestamps: true
});

var AddplacementSchema = mongoose.model('Login',addplacementSchema);

module.exports = AddplacementSchema;