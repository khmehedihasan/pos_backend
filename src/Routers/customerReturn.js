const express = require('express');
const customerReturn = require('../Controllers/customerReturn');
const validObjectId = require('../Middlewares/validObjectId');
const router = express.Router();

router.get('/', customerReturn.allReturn);

router.get('/:id', validObjectId, customerReturn.singleReturn);

router.post('/:id', validObjectId, customerReturn.returnProduct);

module.exports = router;