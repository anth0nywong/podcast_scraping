"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const function_js_1 = require("../controller/function.js");
const router = express_1.default.Router();
router.get('/', function_js_1.HomePage);
router.get('/:page', function_js_1.RetrieveData);
exports.default = router;
//# sourceMappingURL=index.js.map