const express = require('express');
const router = express.Router();
const user = require('../Controllers/user');


router.get('/',user.getAlluser);
router.post('/',user.addUser);
router.post('/login',user.loginUser);

module.exports = router;