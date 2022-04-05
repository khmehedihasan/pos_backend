const express = require('express');
const validObjectId = require('../Middlewares/validObjectId');
const router = express.Router();
const supplierDue = require('../Controllers/supplierDue');

router.get('/', supplierDue.allDues);

router.get('/:id', validObjectId, supplierDue.singleDue);

router.post('/:id', validObjectId, supplierDue.payDue);

module.exports = router;