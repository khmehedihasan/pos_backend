const express = require('express');
const supplierReturn = require('../Controllers/supplierReturn');
const validObjectId = require('../Middlewares/validObjectId');
const router = express.Router();

router.get('/', supplierReturn.allReturn);

router.get('/:id', validObjectId, supplierReturn.singleReturn);

router.post('/:id', validObjectId, supplierReturn.returnProduct);

module.exports = router;