const express = require('express');
const router = express.Router();
const Salereport = require('../Controllers/report/saleReport');
const purchaseReport = require('../Controllers/report/purchaseReport');


router.get('/sale/totalSale',Salereport.totalSale);
router.get('/sale/totalReceived',Salereport.totalReceived);
router.get('/sale/totalDue',Salereport.totalDue);
router.get('/sale/totalPorduct',Salereport.totalPorduct);

router.get('/purchase/totalSale',purchaseReport.totalPurchase);
router.get('/purchase/totalReceived',purchaseReport.totalPayed);
router.get('/purchase/totalDue',purchaseReport.totalPayed);
router.get('/purchase/totalPorduct',purchaseReport.totalPorduct);

module.exports = router;