const express = require('express');
const router = express.Router();
const product = require('../Controllers/product');
const validObjectId = require('../Middlewares/validObjectId');
const uploadPhoto = require('../Middlewares/uploadPhoto');


router.get('/', product.allProduct);

router.get('/:id', validObjectId, product.singleProduct);

router.post('/', uploadPhoto.single('photo'), product.addProduct)

router.put('/:id', validObjectId, uploadPhoto.single('photo'), product.updateProduct);

router.delete('/:id', validObjectId, product.deleteProduct);

module.exports = router;