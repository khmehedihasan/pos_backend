const express = require('express');
const router = express.Router();
const customer = require('../Controllers/customer');
const validObjectId = require('../Middlewares/validObjectId');
const uploadPhoto = require('../Middlewares/uploadPhoto');

router.get('/', customer.allCustomer);

router.get('/:id', validObjectId, customer.singleCustomer);

router.post('/:id', validObjectId, uploadPhoto.single('photo'), customer.addCustomer)

router.put('/:id', validObjectId, uploadPhoto.single('photo'), customer.updateCustomer);

router.delete('/:id', validObjectId, customer.deleteCustomer);

module.exports = router;