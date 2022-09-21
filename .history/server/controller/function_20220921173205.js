import {spawn} from 'child_process'
import fs from 'fs'
import path from 'path';

export function HomePage(req, res, next)
{
    let page = req.params.page;
    let fileName = '../data/data' + page + '.json';
    let data = fs.readFileSync(path.resolve(__dirname, filename));
    let sendData = JSON.parse(data);
    //res.render('index', { title: 'Express', podcasts: sendData });
    res.json({success: true, message: 'Podcast Retrieved Successfully', data: sendData});
}
