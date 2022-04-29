var express = require('express');
var router = express.Router();

/* GET home page. */
router.use(express.static('frontend'));

module.exports = router;
