var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    const year = new Date()
    res.json({ year: year.getFullYear() });
});

module.exports = router;