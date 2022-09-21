import {spawn} from 'child_process'
import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function HomePage(req, res, next)
{
    let page = req.params.page;
    let fileName = '../data/data' + page + '.json';
    let data = fs.readFileSync(path.resolve(__dirname, fileName));
    let sendData = JSON.parse(data);
    //res.render('index', { title: 'Express', podcasts: sendData });
    res.json({success: true, message: 'Podcast Retrieved Successfully', data: sendData});
}
