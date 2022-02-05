const express = require('express');
const router = express.Router();
const category = require('../Controllers/category');
const uploadPhoto = require('../Middlewares/uploadPhoto');

router.get('/', category.allCategory);

router.get('/:id', category.singleCategory);

router.post('/',uploadPhoto.single('photo') ,category.addCategory)

router.put('/', category.updateCategory);

router.delete('/', category.deleteCategory);

module.exports = router;