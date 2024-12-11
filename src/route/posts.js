const express = require('express');
const router = express.Router();

const {
    getPost,
    createPost,
} = require('../src/controllers/postSubmitController.js');

router.get('/posts', getPost);

router.post('/postSubmit', createPost);

module.exports = router;