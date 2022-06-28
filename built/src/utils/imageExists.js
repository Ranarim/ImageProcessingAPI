"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageExists = void 0;
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var imageExists = function (imageName, width, height) {
    var pathExist = path_1.default.join(__dirname, "../database/thumb/".concat(imageName, "_").concat(width, "x").concat(height, ".jpg"));
    return fs_1.default.existsSync(pathExist);
};
exports.imageExists = imageExists;
