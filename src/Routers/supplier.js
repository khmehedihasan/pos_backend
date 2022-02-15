const express = require('express');
const router = express.Router();
const supplier = require('../Controllers/supplier');
const validObjectId = require('../Middlewares/validObjectId');
const uploadPhoto = require('../Middlewares/uploadPhoto');

router.get('/',supplier.allSupplier);

router.get('/:id', validObjectId,supplier.singleSupplier)

router.post('/', uploadPhoto.single('photo'), supplier.addSupplier);

router.put('/:id', validObjectId, uploadPhoto.single('photo'), supplier.updateSupplier);

router.delete('/:id', validObjectId, supplier.deleteSupplier);

module.exports = router;