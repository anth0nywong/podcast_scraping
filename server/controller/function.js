"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimplePodcast = exports.HomePage = exports.RetrieveData = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function RetrieveData(req, res, next) {
    let page = req.params.page;
    let fileName = '../data/data' + page + '.json';
    let data = fs_1.default.readFileSync(path_1.default.resolve(__dirname, fileName));
    let sendData = JSON.parse(data.toString());
    res.json({ success: true, message: 'Podcast Retrieved Successfully', data: sendData });
}
exports.RetrieveData = RetrieveData;
function HomePage(req, res, next) {
    res.json({ success: true, message: 'Home Page render successfully', msg: "Welcome to my home page" });
}
exports.HomePage = HomePage;
function SimplePodcast(req, res, next) {
    let page = req.params.page;
    let fileName = '../data/data' + page + '.json';
    let data = fs_1.default.readFileSync(path_1.default.resolve(__dirname, fileName));
    let sendData = JSON.parse(data.toString());
    res.render('index', { title: 'Page ' + page, podcasts: sendData });
}
exports.SimplePodcast = SimplePodcast;
//# sourceMappingURL=function.js.map