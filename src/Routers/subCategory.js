const express = require('express');
const router = express.Router();
const subCategory = require('../Controllers/subCategory');
const uploadPhoto = require('../Middlewares/uploadPhoto');
const validObjectId = require('../Middlewares/validObjectId');



router.get('/', subCategory.allSubCategory);

router.get('/:id', validObjectId, subCategory.singleSubCategory);

router.post('/', uploadPhoto.single('photo'), subCategory.addSubCategory)

router.put('/', validObjectId, uploadPhoto.single('photo'), subCategory.updateSubCategory);

router.delete('/:id', validObjectId, subCategory.deleteSubCategory);

module.exports = router;