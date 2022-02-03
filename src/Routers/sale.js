const express = require('express');
const router = express.Router();
const sale = require('../Controllers/sale');

router.get('/', sale.allSale);

router.get('/:id', sale.singleSale);

router.post('/', sale.addSale)

router.put('/', sale.updateSale);

router.delete('/', sale.deleteSale);

module.exports = router;