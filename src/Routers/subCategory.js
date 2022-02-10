const express = require('express');
const router = express.Router();
const subCategory = require('../Controllers/subCategory');
const uploadPhoto = require('../Middlewares/uploadPhoto');


router.get('/', subCategory.allSubCategory);

router.get('/:id', subCategory.singleSubCategory);

router.post('/', uploadPhoto.single('photo'), subCategory.addSubCategory)

router.put('/', subCategory.updateSubCategory);

router.delete('/', subCategory.deleteSubCategory);

module.exports = router;