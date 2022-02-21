const express = require('express');
const router = express.Router();
const purchase = require('../Controllers/purchase');
const validObjectId = require('../Middlewares/validObjectId');

router.get('/', purchase.allPurchase);

router.get('/:id', validObjectId, purchase.singlePurchase);

router.post('/', purchase.addPurchase)

router.put('/:id', validObjectId, purchase.updatePurchase);

router.delete('/:id', validObjectId, purchase.deletePurchase);

router.put('/due/:id', validObjectId, purchase.payDue);

module.exports = router;