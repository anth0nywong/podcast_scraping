import express from 'express';
import {HomePage} from '../controller/function';
const router = express.Router();

/* GET home page. */
router.get('/',  HomePage);

export default router;
