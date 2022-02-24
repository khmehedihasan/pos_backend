const Purchase = require('../Models/Purchase');
const Sale = require('../Models/Sale');
const Product = require('../Models/Product');


//--------------------------------------get total received money----------------------------------

exports.totalReceived = async (req,res,next) =>{
    try{
        const data = await Sale.aggregate([
            {
              "$group": {
                "_id": null,
                "total": {
                  "$sum": "$received"
                }
              }
            }
          ]);

        res.send(data)
    }catch(error){
        next(error)
    }
}



//--------------------------------------get total sales due----------------------------------

exports.totalDue = async (req,res,next) =>{
    try{
        const data = await Sale.aggregate([
            {
              "$group": {
                "_id": null,
                "total": {
                  "$max": "$due"
                }
              }
            }
          ]);

        res.send(data)
    }catch(error){
        next(error)
    }
}