var express = require('express');
var functions = require ('../controller/function');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  functions.HomePage();
});

module.exports = router;
