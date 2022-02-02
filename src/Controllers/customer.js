const Customer = require('../Models/Customer');


//-------------------------------------------------------add customer------------------------------------------------

exports.addCustomer = async (req,res,next)=>{
    try{
        res.send("ok");
    }catch(error){
        next(error);
    }
}


//---------------------------------------------------all customer--------------------------------------------------------

exports.allCustomer = async (req,res,next)=>{
    try{
        res.send("ok");
    }catch(errro){
        next(error);
    }
}

//-------------------------------------------------------------single customer-------------------------------------------------

exports.singleCustomer = async (req,res,next)=>{
    try{
        res.send("ok");
    }catch(error){
        next(error);
    }
}


//---------------------------------------------------------------------update customer-----------------------------------------------

exports.updateCustomer = async (req,res,next)=>{
    try{
        res.send("ok");
    }catch(error){
        next(error);
    }
}


//--------------------------------------------------------------------delete customer---------------------------------------------------

exports.deleteCustomer = async (req,res,next)=>{
    try{
        res.send("ok");
    }catch(error){
        next(error);
    }
}