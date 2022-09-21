import {spawn} from 'child_process'
import fs from 'fs'

export function HomePage(req, res, next)
{
    let data = fs.readFileSync('links.json');
    let sendData = JSON.parse(data);
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        const objs = 
        dataToSend = objs
       });
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        console.log(dataToSend);
        res.render('index', { title: 'Express', podcasts: sendData });
    });
}
