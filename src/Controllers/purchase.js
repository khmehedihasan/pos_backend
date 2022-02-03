const Purchase = require('../Models/Purchase');


//-------------------------------------------------------add Purchase------------------------------------------------

exports.addPurchase = async (req,res,next)=>{
    try{
        res.send("ok");
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