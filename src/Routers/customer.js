const express = require('express');
const router = express.Router();
const customer = require('../Controllers/customer');

router.get('/', customer.allCustomer);

router.get('/:id', customer.singleCustomer);

router.post('/', customer.addCustomer)

router.put('/', customer.updateCustomer);

router.delete('/', customer.deleteCustomer);

module.exports = router;