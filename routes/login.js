const express = require('express');
const router = express.Router();
const tvmaze = require('tvmaze-api')

router.get('/', function(req, res, next) {
        res.render('login', {login: "login page"})
});

module.exports = router;
