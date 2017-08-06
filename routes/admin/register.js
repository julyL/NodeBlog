var express = require('express');
var router = express.Router();
var dbUser = require('../../db/user.js');

router.get('/register', function (req, res, next) {
    res.render('./admin/register', {
        user: req.session.user
    });
})

module.exports = router;