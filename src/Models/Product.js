const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
    },
    photo:{
        type:String,
    },
    img:{
        type:String,
    },
    purchasePrice:{
        type:String,
        require:true
    },
    salePrice:{
        type:String,
        require:true
    },
    purchaseQuantity:{
        type:String,
        default:"0"
    },
    saleQuantity:{
        type:String,
        default:"0"
    },
    inStock:{
        type:String,
        default:"0"
    },
    category:{
            type: mongoose.Types.ObjectId,
            ref:"Category"
    },
    subCategorys:{
            type:mongoose.Types.ObjectId,
            ref:"SubCategory"
    },
    date:{
        type:Date,
        default:Date.now()
    }

});


const Product = mongoose.model("Product", productSchema);

module.exports = Product;