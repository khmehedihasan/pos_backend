const Sale = require('../Models/Sale');
const Product = require('../Models/Product');
const Customer = require('../Models/Customer');




//-------------------------------------------------------add Sale------------------------------------------------

exports.addSale = async (req,res,next)=>{
    try{
        const dtt = await Customer.findById(req.body.customerId);

        const data = await Sale({
            product:req.body.productId,
            customer:req.body.customerId,
            receivable: req.body.receivable,
            received: req.body.received,
            due: req.body.receivable - req.body.received,
            quantity:req.body.quantity,
            customerName:dtt.name,
            customerEmail:dtt.email,
            customerPhone:dtt.phone,

        });
    

        const d = await data.save();

        if(d != {}){

            const dt = await Product.findById(req.body.productId);
            if(dt != null){

                const saleQuantity = (parseInt(req.body.quantity) + parseInt(dt.saleQuantity));
                const inStock = (parseInt(dt.inStock) - parseInt(req.body.quantity));

                const dc = await Product.findByIdAndUpdate(req.body.productId,{$set:{saleQuantity,inStock},$push:{sales:d._id}});
            }
            

            if(dtt != null){

                const receivable = (parseInt(req.body.receivable) + parseInt(dtt.receivable));
                const received = (parseInt(req.body.received) + parseInt(dtt.received));
                const due = (parseInt(d.due) + parseInt(dtt.due));

                const dc = await Customer.findByIdAndUpdate(req.body.customerId,{$set:{receivable,received,due},$push:{sales:d._id}});
            }

            res.send({status:true,message:"Product sale successfully."});
        }else{
            res.send({status:true,message:"Product failed to sale."});
        }
    }catch(error){
        next(error);
    }
}


//---------------------------------------------------all Sale--------------------------------------------------------

exports.allSale = async (req,res,next)=>{
    try{
        const data = await Sale.find().select({__v:0}).populate('product customer','name email phone due salePrice purchasePrice purchaseQuantity saleQuantity inStock');
        if(data.length<1){
            res.status(404).send({status:false,message:"No Product is sale yet!"});
        }else{
            res.json({status:true,data});
        }
    }catch(error){
        next(error);
    }
}

//-------------------------------------------------------------single Sale-------------------------------------------------

exports.singleSale = async (req,res,next)=>{
    try{
        const data = await Sale.findById(req.params.id).select({__v:0}).populate('product customer','name email phone due salePrice purchasePrice purchaseQuantity saleQuantity inStock');

        if(data == null){
            res.status(404).send({status:false,message:"No sale data found."});
        }else{
            res.json({status:true,data});
        }
    }catch(error){
        next(error);
    }
}


//---------------------------------------------------------------------update Sale-----------------------------------------------

exports.updateSale = async (req,res,next)=>{
    try{
        res.send("ok");
    }catch(error){
        next(error);
    }
}


//--------------------------------------------------------------------delete Sale---------------------------------------------------

exports.deleteSale = async (req,res,next)=>{
    try{
        res.send("ok");
    }catch(error){
        next(error);
    }
}