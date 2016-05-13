var express = require('express');
var router = express.Router();

// POST /signup
// router.post('/', function (req, res) {
//     // handle a post request to this route
// });

// GET /signup/info
router.get('/', function (req, res) {
    // handle a get request to this route
    res.sendFile(path.join(__dirname + '/index.html'));
});

module.exports = router;