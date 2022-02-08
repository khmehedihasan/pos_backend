require('dotenv').config();
const Category = require('../Models/Category');
const fs = require('fs');


//-------------------------------------------------------add Category------------------------------------------------

exports.addCategory = async (req,res,next)=>{
    try{
        const photo = req.file.filename;
        const image = process.env.PUBLIC_LINK+req.file.filename;

        const data = await Category({
            name:req.body.name,
            description:req.body.description,
            img:image,
            photo:photo
        });

        const d = await data.save();

        if(d != {}){
            res.send({status:true,message:"Category added successfully."});
        }else{
            res.send({status:true,message:"Category added successfully."});
        }
        
    }catch(error){
        next(error);
    }
}


//---------------------------------------------------all Category--------------------------------------------------------

exports.allCategory = async (req,res,next)=>{
    try{

        const data = await Category.find().select({__v:0})
        if(data.length<1){
            res.status(400).send({status:false,message:"Category not found."});
        }else{
            res.json({status:true,data});
        }

    }catch(errro){
        next(error);
    }
}

//-------------------------------------------------------------single Category-------------------------------------------------

exports.singleCategory = async (req,res,next)=>{
    try{

        const data = await Category.find({_id:req.params.id}).select({__v:0})
        if(data.length<1){
            res.status(400).send({status:false,message:"Category not found."});
        }else{
            res.json({status:true,data});
        }
        
    }catch(error){
        next(error);
    }
}


//---------------------------------------------------------------------update Category-----------------------------------------------

exports.updateCategory = async (req,res,next)=>{
    try{
        const photo = req.file.filename;
        const image = process.env.PUBLIC_LINK+req.file.filename;

        const data = await Category.findByIdAndUpdate(req.params.id,{$set:{
            name:req.body.name,
            description:req.body.description,
            img:image,
            photo:photo
        }});

        if(data == null){

            await fs.unlink('./src/upload/'+photo,(error)=>{
                if(error){
                    next(error);
                }
            });
            res.status(400).send({status:false,message:"Category not found."});

        }else{

            await fs.unlink('./src/upload/'+data.photo,(error)=>{
                if(error){
                    next(error);
                }
            });
            res.json({status:true,message:'Category update successfully.'});
        }

    }catch(error){
        next(error);
    }
}


//--------------------------------------------------------------------delete Category---------------------------------------------------

exports.deleteCategory = async (req,res,next)=>{
    try{
        res.send("ok");
    }catch(error){
        next(error);
    }
}