const express = require('express');
const router = express.Router();

const gift = require('../controllers/gifts.controller');

router.get('/gifts', gift.getAll);
router.get('/gift/:id', gift.getById); 

module.exports = router;
