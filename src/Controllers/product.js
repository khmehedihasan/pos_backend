const Product = require('../Models/Product');


//-------------------------------------------------------add Product------------------------------------------------

exports.addProduct = async (req,res,next)=>{
    try{
        res.send("ok");
    }catch(error){
        next(error);
    }
}


//---------------------------------------------------all Product--------------------------------------------------------

exports.allProduct = async (req,res,next)=>{
    try{
        res.send("ok");
    }catch(errro){
        next(error);
    }
}

//-------------------------------------------------------------single Product-------------------------------------------------

exports.singleProduct = async (req,res,next)=>{
    try{
        res.send("ok");
    }catch(error){
        next(error);
    }
}


//---------------------------------------------------------------------update Product-----------------------------------------------

exports.updateProduct = async (req,res,next)=>{
    try{
        res.send("ok");
    }catch(error){
        next(error);
    }
}


//--------------------------------------------------------------------delete Product---------------------------------------------------

exports.deleteProduct = async (req,res,next)=>{
    try{
        res.send("ok");
    }catch(error){
        next(error);
    }
}