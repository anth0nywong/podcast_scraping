"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const index_js_1 = __importDefault(require("../routes/index.js"));
const users_js_1 = __importDefault(require("../routes/users.js"));
const api_js_1 = __importDefault(require("../routes/api.js"));
let app = (0, express_1.default)();
app.set('views', path_1.default.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path_1.default.join(__dirname, '../../public')));
app.use(express_1.default.static(path_1.default.join(__dirname, '../../node_modules')));
app.use('/', index_js_1.default);
app.use('/users', users_js_1.default);
app.use('/api', api_js_1.default);
app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
});
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});
exports.default = app;
//# sourceMappingURL=app.js.map