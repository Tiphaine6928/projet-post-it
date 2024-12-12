const express = require('express');
const router = express.Router();

const {
    connexion,
    createUser
} = require('../controllers/userController.js');

// router.get('/posts', connectUser);

router.post('/sInscrire', createUser);
router.post('/seConnecter', connexion);

module.exports = router;