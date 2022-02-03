const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
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
    },
    date:{
        type:Date,
        default:Date.now()
    }

});


const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;