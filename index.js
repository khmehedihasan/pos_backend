require('dotenv').config();
require('./src/DB/connect');
const express = require('express');
const app = express();


app.use(express.json({
    type:['application/json','text/plain','application/x-www-form-urlencoded']
}))

app.use(require('./src/Middlewares/allowHeaders'));

app.use('/public/upload',express.static('./src/upload'));


app.get('/', async (req,res,next)=>{

   try{

    res.send('hello');

   }catch(error){

    next(error);

   }
})


//----------------------------------------------------Routers-----------------------------------------------------

app.use('/user',require('./src/Routers/user'));

app.use('/supplier',require('./src/Routers/supplier'));

app.use('/customer', require('./src/Routers/customer'));

app.use('/category', require('./src/Routers/category'));

app.use('/subCategory', require('./src/Routers/subCategory'));

app.use('/product', require('./src/Routers/product'));

app.use('/purchase', require('./src/Routers/purchase'));

app.use('/sale', require('./src/Routers/sale'));

app.use('/due/supplier', require('./src/Routers/supplierDue'));

app.use('/due/customer', require('./src/Routers/CustomerDue'));

app.use('/report', require('./src/Routers/report'));







//----------------------------------------------Error handler-----------------------------------------------

app.use(require('./src/Middlewares/errorHandler'));




app.listen(process.env.PORT,()=>{
    console.log(`App is running on port ${process.env.PORT}...`);
});