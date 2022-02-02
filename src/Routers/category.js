const express = require('express');
const router = express.Router();
const category = require('../Controllers/category');

router.get('/', category.allCategory);

router.get('/:id', category.singleCategory);

router.post('/', category.addCategory)

router.put('/', category.updateCategory);

router.delete('/', category.deleteCategory);

module.exports = router;