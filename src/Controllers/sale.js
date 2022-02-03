const Sale = require('../Models/Sale');


//-------------------------------------------------------add Sale------------------------------------------------

exports.addSale = async (req,res,next)=>{
    try{
        res.send("ok");
    }catch(error){
        next(error);
    }
}


//---------------------------------------------------all Sale--------------------------------------------------------

exports.allSale = async (req,res,next)=>{
    try{
        res.send("ok");
    }catch(errro){
        next(error);
    }
}

//-------------------------------------------------------------single Sale-------------------------------------------------

exports.singleSale = async (req,res,next)=>{
    try{
        res.send("ok");
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