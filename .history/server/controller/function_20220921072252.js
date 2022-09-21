import {spawn} from 'child_process'
import fs from 'fs'

export function HomePage(req, res, next)
{
    let data = fs.readFileSync('links.json');
    let sendData = JSON.parse(data);
    res.render('index', { title: 'Express', podcasts: sendData });
}
