const express = require('express');
const router = express.Router();
const report = require('../Controllers/report')

router.get('/totalReceived',report.totalReceived);
router.get('/totalDue',report.totalDue);

module.exports = router;