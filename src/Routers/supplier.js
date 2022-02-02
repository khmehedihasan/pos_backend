const express = require('express');
const router = express.Router();
const supplier = require('../Controllers/supplier')

router.get('/',supplier.allSupplier);

router.get('/:id',supplier.singleSupplier)

router.post('/',supplier.addSupplier);

router.put('/',supplier.updateSupplier);

router.delete('/',supplier.deleteSupplier);

module.exports = router;