const express = require('express');
const router = express.Router();
const userhandler = require('../handlers/userHandler');


router.post('/sign-up',userhandler.SaveUserDetail);
router.post('/login',userhandler.Login);


module.exports = router;