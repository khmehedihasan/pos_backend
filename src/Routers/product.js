const express = require('express');
const router = express.Router();
const product = require('../Controllers/product');

router.get('/', product.allProduct);

router.get('/:id', product.singleProduct);

router.post('/', product.addProduct)

router.put('/', product.updateProduct);

router.delete('/', product.deleteProduct);

module.exports = router;