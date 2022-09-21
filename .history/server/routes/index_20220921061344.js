import express from 'express';
import {HomePage} from '../controller/function';


/* GET home page. */
router.get('/',  HomePage);

export default router;
