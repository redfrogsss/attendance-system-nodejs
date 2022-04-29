var express = require('express');
var router = express.Router();

const processRequest = (req, res) => {
    req.session.active_user = undefined;
    res.redirect("index.html");
}

router.get('/', function (req, res) {
    processRequest(req, res);
});

router.post('/', function (req, res) {
    processRequest(req, res);
});

module.exports = router;