const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true
    }
},{
    timestamps: true
});

var Login = mongoose.model('Login', loginSchema);

module.exports = Login;