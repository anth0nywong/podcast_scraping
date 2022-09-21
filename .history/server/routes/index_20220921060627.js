var express = require('express');
var functions = require ('../controller/function');
var router = express.Router();


/* GET home page. */
router.get('/',   functions.HomePage);

module.exports = router;
