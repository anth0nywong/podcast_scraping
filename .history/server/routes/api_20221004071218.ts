import express from 'express';
import {RetrieveData} from '../controller/function.js';
import {HomePage, SimplePodcast} from '../controller/function.js';

const router = express.Router();

router.get('/:page',  RetrieveData);

router.get('/',  HomePage);


export default router;
