#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = __importDefault(require("./server/config/app.js"));
const debug_1 = __importDefault(require("debug"));
const http_1 = __importDefault(require("http"));
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
var port = normalizePort(process.env.PORT || '3000');
app_js_1.default.set('port', port);
var server = http_1.default.createServer(app_js_1.default);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
function runScript() {
    return (0, child_process_1.spawn)('python', [path_1.default.join(__dirname, './server/controller/scraping.py')]);
}
const subprocess = runScript();
subprocess.stdout.on('data', (data) => {
    console.log(`data:${data}`);
});
subprocess.stderr.on('data', (data) => {
    console.log(`error:${data}`);
});
subprocess.on('close', () => {
    console.log("Closed");
});
function normalizePort(val) {
    let port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    let addr = server.address();
    let bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    (0, debug_1.default)('Listening on ' + bind);
}
//# sourceMappingURL=server.js.map