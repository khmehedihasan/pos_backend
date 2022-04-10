require('dotenv').config();
require('./src/DB/connect');
const cookieParser = require('cookie-parser');
const express = require('express');
const cheackToken = require('./src/Middlewares/cheackToken');
const app = express();


app.use(express.json({
    type:['application/json','text/plain','application/x-www-form-urlencoded']
}));

app.use(cookieParser(process.env.COOKIESEC));

app.use(require('./src/Middlewares/allowHeaders'));

app.use('/public/upload',express.static('./src/upload'));


app.get('/', async (req,res,next)=>{

   try{
        res.cookie('ton','osjdfojsdfjdsfjsdjfdojsf',{expires: new Date(Date.now() + parseInt(process.env.COOKIEEXP)), httpOnly: true , secure: true, signed:true, secret:process.env.COOKIESEC, sameSite:"none" }) 
        res.send('hello');
        // console.log(req.signedCookies.ton)
   }catch(error){

        next(error);

   }
})


//----------------------------------------------------Routers-----------------------------------------------------

app.use('/user',require('./src/Routers/user'));

app.use('/supplier', cheackToken, require('./src/Routers/supplier'));

app.use('/customer', cheackToken, require('./src/Routers/customer'));

app.use('/category', cheackToken, require('./src/Routers/category'));

app.use('/subCategory', cheackToken, require('./src/Routers/subCategory'));

app.use('/product', cheackToken, require('./src/Routers/product'));

app.use('/purchase', cheackToken, require('./src/Routers/purchase'));

app.use('/sale', cheackToken, require('./src/Routers/sale'));

app.use('/due/supplier', cheackToken, require('./src/Routers/supplierDue'));

app.use('/due/customer', cheackToken, require('./src/Routers/CustomerDue'));

app.use('/return/supplier', cheackToken, require('./src/Routers/SupplierReturn'));

app.use('/return/customer', cheackToken, require('./src/Routers/customerReturn'));

app.use('/report', cheackToken, require('./src/Routers/report'));







//----------------------------------------------Error handler-----------------------------------------------

app.use(require('./src/Middlewares/errorHandler'));




app.listen(process.env.PORT,()=>{
    console.log(`App is running on port ${process.env.PORT}...`);
});