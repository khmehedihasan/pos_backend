const mongoose = require('mongoose');

const purchaseSchema = mongoose.Schema({
    product:{
        type:mongoose.Types.ObjectId,
        ref:"Product"
    },
    supplier:{
        type:mongoose.Types.ObjectId,
        ref:"Supplier"
    },
    supplierName:{
        type:String,
    },
    supplierEmail:{
        type:String,
    },
    supplierPhone:{
        type:String,
    },
    payable:{
        type:String,
        require:true
    },
    payed:{
        type:String,
        require:true
    },
    due:{
        type:String,
        default:"0"
    },
    quantity:{
        type:String,
        default:"1"
    },
    date:{
        type:Date,
        default:Date.now()
    }

});


const Purchase = mongoose.model("Purchase", purchaseSchema);

module.exports = Purchase;