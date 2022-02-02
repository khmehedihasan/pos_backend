const Supplier = require('../Models/Supplier');

//-------------------------------------------------------------add supplier------------------------------------------------


exports.addSupplier = async (req,res,next)=>{
    try{
        res.send('ok')
    }catch(error){
        next(error);
    }
}


//-------------------------------------------------------------get all supplier------------------------------------------------



exports.allSupplier = async (req,res,next)=>{
    try{
        res.send("ok");
    }catch(error){
        next(error);
    }
}


//-------------------------------------------------------------get single by id supplier------------------------------------------------


exports.singleSupplier = async (req,res,next)=>{
    try{
        res.send("ok");
    }catch(error){
        next(error);
    }
}



//-------------------------------------------------------------update supplier------------------------------------------------


exports.updateSupplier = async (req,res,next) =>{
    try{
        res.send("ok");
    }catch(error){
        next(error);
    }
}


//-------------------------------------------------------------delete supplier------------------------------------------------


exports.deleteSupplier = async (req,res,next)=>{
    try{
        res.send('ok');
    }catch(error){
        next(error);
    }
}