import express from 'express';
import {HomePage} from '../controller/function';
import router from express.Router();


/* GET home page. */
router.get('/',  HomePage);

export default router;
