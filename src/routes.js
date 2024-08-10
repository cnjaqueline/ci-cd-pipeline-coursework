// routes.js
const express = require('express');
const path = require('path');
const router = express.Router();
const controller = require('./controller');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

router.post('/sum', controller.sum);

module.exports = router;
