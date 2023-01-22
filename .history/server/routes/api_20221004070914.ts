import express from 'express';
import {RetrieveData} from '../controller/function.js';
const router = express.Router();

router.get('/:page',  RetrieveData);

export default router;
