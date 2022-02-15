const Supplier = require('../Models/Supplier');

//-------------------------------------------------------------add supplier------------------------------------------------


exports.addSupplier = async (req,res,next)=>{
    try{
        
        if(req.file == undefined){

            const data = await Supplier({
                name:req.body.name,
                email:req.body.description,
                phone:req.body.description,
                address:req.body.description
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
                email:req.body.description,
                phone:req.body.description,
                address:req.body.description,
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