const express = require('express');
const validObjectId = require('../Middlewares/validObjectId');
const router = express.Router();
const customerDue = require('../Controllers/customerDue');

router.get('/', customerDue.allDues);

router.get('/:id', validObjectId, customerDue.singleDue);

router.post('/:id', validObjectId, customerDue.getDue);

module.exports = router;