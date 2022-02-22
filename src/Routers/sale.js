const express = require('express');
const router = express.Router();
const sale = require('../Controllers/sale');
const validObjectId = require('../Middlewares/validObjectId');


router.get('/', sale.allSale);

router.get('/:id', validObjectId, sale.singleSale);

router.post('/', sale.addSale)

router.put('/:id', validObjectId, sale.updateSale);

router.delete('/:id', validObjectId, sale.deleteSale);

router.put('/due/:id', validObjectId, sale.getDue);

module.exports = router;