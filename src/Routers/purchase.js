const express = require('express');
const router = express.Router();
const purchase = require('../Controllers/purchase');

router.get('/', purchase.allPurchase);

router.get('/:id', purchase.singlePurchase);

router.post('/', purchase.addPurchase)

router.put('/', purchase.updatePurchase);

router.delete('/', purchase.deletePurchase);

module.exports = router;