const SubCategory = require('../Models/SubCategory');
const Category = require('../Models/Category');


//-------------------------------------------------------add SubCategory------------------------------------------------

exports.addSubCategory = async (req,res,next)=>{
    try{


        if(req.file == undefined){

            const data = await SubCategory({
                name:req.body.name,
                description:req.body.description,
                category: req.body.categoryId
            });
        

    
            const d = await data.save();
    
            if(d != {}){
                const dc = await Category.findByIdAndUpdate(req.body.categoryId,{$push:{subCategorys:d._id}});
                res.send({status:true,message:"Sub Category added successfully."});
            }else{
                res.send({status:true,message:"Faild to added Sub Category."});
            }

        }else{
            const photo = req.file.filename;
            const image = process.env.PUBLIC_LINK+req.file.filename;
            const data = await SubCategory({
                name:req.body.name,
                description:req.body.description,
                img:image,
                photo:photo,
                category: req.body.categoryId
            });
    
            const d = await data.save();
    
            if(d != {}){
                const dc = await Category.findByIdAndUpdate(req.body.categoryId,{$push:{subCategorys:d._id}});
                res.send({status:true,message:"Sub Category added successfully."});
            }else{
                res.send({status:true,message:"Faild to added Sub Category."});
            }
        }

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