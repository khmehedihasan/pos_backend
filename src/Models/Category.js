const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
        require:true,
        unique:true
    },
    address:{
        type:String,
        require:true
    },
    receivable:{
        type:String,
        default:'0'
    },
    received:{
        type:String,
        default:'0'
    },
    due:{
        type:String,
        default:'0'
    }

});


const Category = mongoose.model("Category", categorySchema);

module.exports = Category;