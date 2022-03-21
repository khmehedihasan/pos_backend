const allowHeaders = async (req,res,next)=>{
    try{
        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header("Access-Control-Allow-Methods", "*"); 
        next();
    }catch(error){
        next(error);
    }
}

module.exports = allowHeaders ;