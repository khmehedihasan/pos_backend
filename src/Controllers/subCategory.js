const SubCategory = require('../Models/SubCategory');


//-------------------------------------------------------add SubCategory------------------------------------------------

exports.addSubCategory = async (req,res,next)=>{
    try{
        res.send("ok");
    }catch(error){
        next(error);
    }
}


//---------------------------------------------------all SubCategory--------------------------------------------------------

exports.allSubCategory = async (req,res,next)=>{
    try{
        res.send("ok");
    }catch(errro){
        next(error);
    }
}

//-------------------------------------------------------------single SubCategory-------------------------------------------------

exports.singleSubCategory = async (req,res,next)=>{
    try{
        res.send("ok");
    }catch(error){
        next(error);
    }
}


//---------------------------------------------------------------------update SubCategory-----------------------------------------------

exports.updateSubCategory = async (req,res,next)=>{
    try{
        res.send("ok");
    }catch(error){
        next(error);
    }
}


//--------------------------------------------------------------------delete SubCategory---------------------------------------------------

exports.deleteSubCategory = async (req,res,next)=>{
    try{
        res.send("ok");
    }catch(error){
        next(error);
    }
}