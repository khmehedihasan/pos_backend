const Product = require('../Models/Product');
const SubCategory = require('../Models/SubCategory');


//-------------------------------------------------------add Product------------------------------------------------

exports.addProduct = async (req,res,next)=>{
    try{

        if(req.file == undefined){

            const data = await Product({
                name:req.body.name,
                description:req.body.description,
                purchasePrice:req.body.purchasePrice,
                salePrice:req.body.salePrice,
                subCategory: req.body.subCategoryId
            });
        

    
            const d = await data.save();
    
            if(d != {}){
                const dc = await SubCategory.findByIdAndUpdate(req.body.subCategoryId,{$push:{products:d._id}});
                res.send({status:true,message:"Product added successfully."});
            }else{
                res.send({status:true,message:"Faild to added product."});
            }

        }else{
            const photo = req.file.filename;
            const image = process.env.PUBLIC_LINK+req.file.filename;
            const data = await Product({
                name:req.body.name,
                description:req.body.description,
                purchasePrice:req.body.purchasePrice,
                salePrice:req.body.salePrice,
                subCategory: req.body.subCategoryId,
                img:image,
                photo:photo
                
            });
    
            const d = await data.save();
    
            if(d != {}){
                const dc = await SubCategory.findByIdAndUpdate(req.body.subCategoryId,{$push:{products:d._id}});
                res.send({status:true,message:"Product added successfully."});
            }else{
                res.send({status:true,message:"Faild to added product."});
            }
        }

        
    }catch(error){
        next(error);
    }
}


//---------------------------------------------------all Product--------------------------------------------------------

exports.allProduct = async (req,res,next)=>{
    try{
        const data = await Product.find().select({__v:0}).populate('subCategory','name description img');
        if(data.length<1){
            res.status(404).send({status:false,message:"Sub Category not found."});
        }else{
            res.json({status:true,data});
        }
    }catch(errro){
        next(error);
    }
}

//-------------------------------------------------------------single Product-------------------------------------------------

exports.singleProduct = async (req,res,next)=>{
    try{
        const data = await Product.findById(req.params.id).select({__v:0}).populate('category','name description img');

        if(data == null){
            res.status(404).send({status:false,message:"Sub Category not found."});
        }else{
            res.json({status:true,data});
        }
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