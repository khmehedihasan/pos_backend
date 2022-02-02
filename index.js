require('dotenv').config();
require('./src/DB/connect');
const express = require('express');
const app = express();


app.use(express.json({
    type:['application/json','text/plain','application/x-www-form-urlencoded']
}))


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
app.use('/customer', require('./src/Routers/customer'))
app.use('/category', require('./src/Routers/category'))







//----------------------------------------------Error handler------------------------------------------------
app.use(require('./src/Middlewares/errorHandler'));




app.listen(process.env.PORT,()=>{
    console.log(`App is running on port ${process.env.PORT}...`);
});