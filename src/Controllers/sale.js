const Sale = require('../Models/Sale');
const Product = require('../Models/Product');
const Customer = require('../Models/Customer');




//-------------------------------------------------------add Sale------------------------------------------------

exports.addSale = async (req,res,next)=>{
    try{
        const dtt = await Customer.findById(req.body.customerId);
        const dt = await Product.findById(req.body.productId);


        const data = await Sale({
            product:req.body.productId,
            customer:req.body.customerId,
            receivable: dt.salePrice * req.body.quantity,
            received: req.body.received,
            due: (dt.salePrice * req.body.quantity) - req.body.received,
            quantity:req.body.quantity,
            customerName:dtt.name,
            customerEmail:dtt.email,
            customerPhone:dtt.phone,

        });
    

        const d = await data.save();

        if(d != {}){

            if(dt != null){

                const saleQuantity = req.body.quantity + dt.saleQuantity;
                const inStock = dt.inStock - req.body.quantity;

                const dc = await Product.findByIdAndUpdate(req.body.productId,{$set:{saleQuantity,inStock},$push:{sales:d._id}});
            }
            

            if(dtt != null){

                const receivable = d.receivable + dtt.receivable;
                const received = req.body.received + dtt.received;
                const due = d.due + dtt.due;

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

//--------------------------------------------------------------------get due---------------------------------------------------

exports.getDue = async (req,res,next)=>{
    try{
        const prevData = await Sale.findById(req.params.id).populate('product customer','name email phone receivable received due');

        if(prevData == null){
            res.status(404).send({status:false,message:"No sale data found."});
        }else{
            // res.send(prevData)
            const data = await Sale.findByIdAndUpdate(req.params.id,{$set:{received: prevData.received + req.body.received, due: prevData.due - req.body.received}});
            if(data == null){
                res.send({status:true,message:"Faild to pay due."});
            }else{
                const dt = await Customer.findByIdAndUpdate(prevData.customer._id,{$set:{received: prevData.customer.received + req.body.received, due: prevData.customer.due - req.body.received}});
                res.send({status:true,message:"Due payed successfully."});
            }
        }
    }catch(error){
        next(error);
    }
}