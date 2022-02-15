const Customer = require('../Models/Customer');
const fs = require('fs');


//-------------------------------------------------------add customer------------------------------------------------

exports.addCustomer = async (req,res,next)=>{
    try{

        if(req.file == undefined){

            const data = await Customer({
                name:req.body.name,
                email:req.body.email,
                phone:req.body.phone,
                address:req.body.address
            });
        

    
            const d = await data.save();
    
            if(d != {}){
                res.send({status:true,message:"Customer added successfully."});
            }else{
                res.send({status:true,message:"Faild to added customer."});
            }

        }else{
            const photo = req.file.filename;
            const image = process.env.PUBLIC_LINK+req.file.filename;
            const data = await Customer({
                name:req.body.name,
                email:req.body.email,
                phone:req.body.phone,
                address:req.body.address,
                img:image,
                photo:photo,
            });
    
            const d = await data.save();
    
            if(d != {}){
                res.send({status:true,message:"Customer added successfully."});
            }else{
                res.send({status:true,message:"Faild to added customer."});
            }
        }

    }catch(error){
        if(req.file != undefined){
            const photo = req.file.filename;

            fs.unlink('./src/upload/' + photo, (error) => {
                if (error) {
                    next(error);
                }
            });
    
        }

        if(error.code){
            if(error.keyPattern.phone){
                res.status(400).send({status:false,message:"Phone number already present."});
            }
            else{
                res.status(400).send({status:false,message:"Email already present."});
            }
        }
        else{
            next(error);
        }
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