const Purchase = require('../Models/Purchase');
const Product = require('../Models/Product');
const Supplier = require('../Models/Supplier');


//-------------------------------------------------------add Purchase------------------------------------------------

exports.addPurchase = async (req,res,next)=>{
    try{

        const data = await Purchase({
            product:req.body.productId,
            supplier:req.body.supplierId,
            payable: req.body.payable,
            payed: req.body.payed,
            due: req.body.payable - req.body.payed,
            quantity:req.body.quantity,
        });
    

        const d = await data.save();

        if(d != {}){

            const dt = await Product.findById(req.body.productId);
            if(dt != null){

                const purchaseQuantity = (parseInt(req.body.quantity) + parseInt(dt.purchaseQuantity));
                const inStock = (parseInt(req.body.quantity) + parseInt(dt.inStock));

                const dc = await Product.findByIdAndUpdate(req.body.productId,{$set:{purchaseQuantity,inStock},$push:{purchases:d._id}});
            }
            

            const dtt = await Supplier.findById(req.body.supplierId);
            if(dtt != null){

                const payable = (parseInt(req.body.payable) + parseInt(dtt.payable));
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
        res.send("ok");
    }catch(errro){
        next(error);
    }
}

//-------------------------------------------------------------single Purchase-------------------------------------------------

exports.singlePurchase = async (req,res,next)=>{
    try{
        res.send("ok");
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