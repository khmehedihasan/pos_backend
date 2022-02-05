const allowHeaders = async (req,res,next)=>{
    try{
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Credentials', 'true');
        next();
    }catch(error){
        next(error);
    }
}

module.exports = allowHeaders ;