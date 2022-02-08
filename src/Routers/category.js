const express = require('express');
const router = express.Router();
const category = require('../Controllers/category');
const uploadPhoto = require('../Middlewares/uploadPhoto');
const validObjectId = require('../Middlewares/validObjectId');

router.get('/', category.allCategory);

router.get('/:id',validObjectId ,category.singleCategory);

router.post('/', uploadPhoto.single('photo') ,category.addCategory)

router.put('/:id', validObjectId, uploadPhoto.single('photo') ,category.updateCategory);

router.delete('/', category.deleteCategory);

module.exports = router;