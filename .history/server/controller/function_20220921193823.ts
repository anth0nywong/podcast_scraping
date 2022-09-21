import {spawn} from 'child_process'
import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

export function RetrieveData(req, res, next)
{
    let page = req.params.page;
    let fileName = '../data/data' + page + '.json';
    let data = fs.readFileSync(path.resolve(__dirname, fileName));
    
    let sendData= JSON.parse(data.toString())
    res.json({success: true, message: 'Podcast Retrieved Successfully', data: sendData});
}

export function HomePage(req, res, next)
{
    res.json({success: true, message: 'Home Page render successfully', msg: "Welcome to my home page"})
}

export function SimplePodcast(req, res, next)
{
    let page = req.params.page;
    let fileName = '../data/data' + page + '.json';
    let data = fs.readFileSync(path.resolve(__dirname, fileName));
    res.render('index', { title: 'Page', podcasts: data });
}