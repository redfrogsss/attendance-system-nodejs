var express = require('express');
var router = express.Router();

const processRequest = (req, res) => {
    if(req.session.active_user){
        res.send(JSON.stringify(req.session.active_user[0]));
    } else {
        res.send("null");
    }
}

router.get('/', function (req, res) {
    processRequest(req, res);
});

router.post('/', function (req, res) {
    processRequest(req, res);
});

module.exports = router;