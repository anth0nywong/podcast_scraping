var express = require('express');
import {HomePage} from '../controller/function';
var router = express.Router();


/* GET home page. */
router.get('/',  HomePage);

export default router;
