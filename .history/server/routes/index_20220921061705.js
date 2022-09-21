import express from 'express';
import {HomePage} from '../controller/function.js';
const router = express.Router();

/* GET home page. */
router.get('/',  HomePage);

export default router;
