"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var imageRouter_1 = __importDefault(require("./routes/imageRouter"));
exports.app = (0, express_1.default)();
/* ROUTES */
exports.app.use('/api/images', imageRouter_1.default);
/* LISTENING */
var PORT = 4000;
exports.app.listen(PORT, function () { return console.log("running on port ".concat(PORT)); });
exports.default = exports.app;
