import express from 'express';
import {HomePage, RetrieveData} from '../controller/function.js';
const router = express.Router();

/* GET home page. */
router.get('/',  HomePage);




router.get('/:page',  RetrieveData);

export default router;
