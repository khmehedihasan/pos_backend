const Purchase = require('../Models/Purchase');
const Product = require('../Models/Product');
const Supplier = require('../Models/Supplier');


//-------------------------------------------------------add Purchase------------------------------------------------

exports.addPurchase = async (req,res,next)=>{
    try{

        const dtt = await Supplier.findById(req.body.supplierId);
        const dt = await Product.findById(req.body.productId);


        const data = await Purchase({
            product:req.body.productId,
            supplier:req.body.supplierId,
            payable: parseInt(dt.salePrice) * parseInt(req.body.quantity),
            payed: req.body.payed,
            due: (dt.salePrice * parseInt(req.body.quantity)) - req.body.payed,
            quantity:req.body.quantity,
            supplierName:dtt.name,
            supplierEmail:dtt.email,
            supplierPhone:dtt.phone,

        });
    

        const d = await data.save();

        if(d != {}){

            if(dt != null){

                const purchaseQuantity = (parseInt(req.body.quantity) + parseInt(dt.purchaseQuantity));
                const inStock = (parseInt(req.body.quantity) + parseInt(dt.inStock));

                const dc = await Product.findByIdAndUpdate(req.body.productId,{$set:{purchaseQuantity,inStock},$push:{purchases:d._id}});
            }
            

            if(dtt != null){

                const payable = (parseInt(d.payable) + parseInt(dtt.payable));
                const payed = (parseInt(req.body.payed) + parseInt(dtt.payed));
                const due = (parseInt(d.due) + parseInt(dtt.due));

                const dc = await Supplier.findByIdAndUpdate(req.body.supplierId,{$set:{payable,payed,due},$push:{purchases:d._id}});
            }

            res.send({status:true,message:"Product purchase successfully."});
        }else{
            res.send({status:true,message:"Product failed to purchase."});
        }

    }catch(error){
        next(error);
    }
}


//---------------------------------------------------all Purchase--------------------------------------------------------

exports.allPurchase = async (req,res,next)=>{
    try{
        const data = await Purchase.find().select({__v:0}).populate('product supplier','name email phone payable payed due salePrice purchasePrice purchaseQuantity saleQuantity inStock');
        if(data.length<1){
            res.status(404).send({status:false,message:"No Product is purchase yet!"});
        }else{
            res.json({status:true,data});
        }

    }catch(errro){
        next(error);
    }
}

//-------------------------------------------------------------single Purchase-------------------------------------------------

exports.singlePurchase = async (req,res,next)=>{
    try{
        const data = await Purchase.findById(req.params.id).select({__v:0}).populate('product supplier','name email phone payable payed due salePrice purchasePrice purchaseQuantity saleQuantity inStock');

        if(data == null){
            res.status(404).send({status:false,message:"No purchase data found."});
        }else{
            res.json({status:true,data});
        }
    }catch(error){
        next(error);
    }
}


//---------------------------------------------------------------------update Purchase-----------------------------------------------

exports.updatePurchase = async (req,res,next)=>{
    try{
        res.send("ok");
    }catch(error){
        next(error);
    }
}


//--------------------------------------------------------------------delete Purchase---------------------------------------------------

exports.deletePurchase = async (req,res,next)=>{
    try{
        res.send("ok");
    }catch(error){
        next(error);
    }
}