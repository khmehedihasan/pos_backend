const express = require('express');
const router = express.Router();
const subcategory = require('../Controllers/subCategory');

router.get('/', subcategory.allSubCategory);

router.get('/:id', subcategory.singleSubCategory);

router.post('/', subcategory.addSubCategory)

router.put('/', subcategory.updateSubCategory);

router.delete('/', subcategory.deleteSubCategory);

module.exports = router;