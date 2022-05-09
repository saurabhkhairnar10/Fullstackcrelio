const express = require('express');
const router = express.Router();
const authenticationHandler = require('../handlers/authenticationHandler');
const authorizationMiddleware = require('../middleware/authorization');

router.post('/reset-password', authorizationMiddleware.checkIfAuthenticated, authenticationHandler.resetPassword);
router.post('/logout', authorizationMiddleware.checkIfAuthenticated, authenticationHandler.logout)


module.exports = router;