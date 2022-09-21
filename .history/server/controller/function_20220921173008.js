import {spawn} from 'child_process'
import fs from 'fs'

export function HomePage(req, res, next)
{
    let page = req.params.page;
    let fileName = '../data/data' + page + '.json';
    let data = fs.readFileSync(__dirname, fileName);
    let sendData = JSON.parse(data);
    //res.render('index', { title: 'Express', podcasts: sendData });
    res.json({success: true, message: 'Podcast Retrieved Successfully', data: sendData});
}
