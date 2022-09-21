import express from 'express';
import {HomePage, RetrieveData, SimplePodcast} from '../controller/function.js';
const router = express.Router();

/* GET home page. */
router.get('/',  HomePage);

router.get('/page/:page',  SimplePodcast);

router.get('/:page',  RetrieveData);

export default router;
