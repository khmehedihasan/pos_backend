const mongoose = require('mongoose');

const saleSchema = mongoose.Schema({
    product:{
        type:mongoose.Types.ObjectId,
        ref:"Product"
    },
    customer:{
        type:mongoose.Types.ObjectId,
        ref:"Customer"
    },
    receivable:{
        type:String,
        require:true
    },
    received:{
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


const Sale = mongoose.model("Sale", saleSchema);

module.exports = Sale;