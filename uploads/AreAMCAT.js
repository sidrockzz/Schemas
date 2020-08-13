const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const areamcatSchema = new Schema({
    user_id:{
        type:Number,
        required:true,
        unique:true
    },
    Date:{
        type:Date,
        required:true
    },
    Assessment_ID:{
        type:Number,
        required:true,
        unique:true
    },
    Logiacl_ablility:{
        type:Number,
        required:true
    },
    Logiacl_ablility_percentail:{
        type:String,
        required:true
    },
    English_comprehension:{
        type:Number,
        required:true
    },
    English_comprehension_perecentail:{
        type:String,
        required:true
    },
    Quantitative_ability:{
        type:Number,
        required:true
    },
    Quantitative_ability_percentail:{
        type:String,
        required:true
    },
    Automata_fix:{
        type:Number,
        required:true
    },
    Automata_fix_percentail:{
        type:String,
        required:true
    },
    Domain:{
        type:Number,
        required:true
    },
    Domain_percentail:{
        type:String,
        required:true
    },
    Over_All_Score:{
        type:Number,
        required:true,
    },
    Over_All_Rank:{
        type:Number,
        required:true
    },
    Remarks:{
        type:String,
    }

},{
    timestamps: true
});

var AreAMCAT = mongoose.model('Login',areamcatSchema);

module.exports = AreAMCAT;