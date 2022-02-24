const express = require('express');
const router = express.Router();
const report = require('../Controllers/report/saleReport')

router.get('/totalReceived',report.totalReceived);
router.get('/totalDue',report.totalDue);
router.get('/totalPorduct',report.totalPorduct);

module.exports = router;