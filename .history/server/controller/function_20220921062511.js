import {spawn} from 'child_process'

export function HomePage(req, res, next)
{
    var dataToSend;
    const python = spawn('python', ['scraping.py']);
    
    python.stdout.on('data', function (data) {
        console.log('Pipe data from python script ...');
        const objs = JSON.parse(data);
       });
    python.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
        res.render('index', { title: 'Express', links: objs });
    });
}
