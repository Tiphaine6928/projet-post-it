const express = require('express');
const router = express.Router();

const {
    // connectUser,
    createUser
} = require('../src/controllers/userController.js');

router.get('/posts', connectUser);

router.post('/sInscrire', createUser);

module.exports = router;