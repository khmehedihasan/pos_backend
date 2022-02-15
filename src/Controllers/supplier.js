const Supplier = require('../Models/Supplier');
const fs = require('fs');

//-------------------------------------------------------------add supplier------------------------------------------------


exports.addSupplier = async (req,res,next)=>{
    try{
        
        if(req.file == undefined){

            const data = await Supplier({
                name:req.body.name,
                email:req.body.email,
                phone:req.body.phone,
                address:req.body.address
            });
        

    
            const d = await data.save();
    
            if(d != {}){
                res.send({status:true,message:"Supplier added successfully."});
            }else{
                res.send({status:true,message:"Faild to added Supplier."});
            }

        }else{
            const photo = req.file.filename;
            const image = process.env.PUBLIC_LINK+req.file.filename;
            const data = await Supplier({
                name:req.body.name,
                email:req.body.email,
                phone:req.body.phone,
                address:req.body.address,
                img:image,
                photo:photo,
            });
    
            const d = await data.save();
    
            if(d != {}){
                res.send({status:true,message:"Supplier added successfully."});
            }else{
                res.send({status:true,message:"Faild to added Supplier."});
            }
        }

    }catch(error){
        
        const photo = req.file.filename;

        fs.unlink('./src/upload/' + photo, (error) => {
            if (error) {
                next(error);
            }
        });

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


//-------------------------------------------------------------get all supplier------------------------------------------------



exports.allSupplier = async (req,res,next)=>{
    try{
        const data = await Supplier.find().select({__v:0});
        if(data.length<1){
            res.status(404).send({status:false,message:"Supplier not found."});
        }else{
            res.json({status:true,data});
        }
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