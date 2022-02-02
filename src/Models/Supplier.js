const mongoose = require('mongoose');

const supplierSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true
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
    payable:{
        type:String,
        default:"0"
    },
    payed:{
        type:String,
        default:"0"
    },
    due:{
        type:String,
        default:"0"
    }
});

const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;