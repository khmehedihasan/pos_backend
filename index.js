require('dotenv').config();
const express = require('express');
const app = express();




app.get('/', async (req,res,next)=>{

   try{
       
    res.send('hello');

   }catch(error){

    next(error);

   }
})






app.use(require('./src/Middlewares/errorHandler'))


app.listen(process.env.PORT,()=>{
    console.log(`App is running on port ${process.env.PORT}...`);
});