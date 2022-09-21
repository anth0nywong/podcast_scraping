import express from 'express';
import {HomePage, SimplePodcast} from '../controller/function.js';
const router = express.Router();

/* GET home page. */
router.get('/',  HomePage);

router.get('/page/:page',  SimplePodcast);

export default router;
