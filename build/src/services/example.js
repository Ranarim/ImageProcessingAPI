"use strict";
/* THIS COMPONENT INTERACTS WITH THE DATA BASE */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleService = void 0;
var example_json_1 = __importDefault(require("./example.json"));
var ExampleService = /** @class */ (function () {
    function ExampleService() {
    }
    ExampleService.prototype.getAll = function () {
        return example_json_1.default;
    };
    ExampleService.prototype.getOne = function (id) {
        var user = example_json_1.default.find(function (user) { return user.id === id; });
        if (!user) {
            throw Error('User not found');
        }
        return user;
    };
    ExampleService.prototype.create = function (user) {
        example_json_1.default.push(user);
        return user;
    };
    ExampleService.prototype.update = function (id, data) {
        var pokemonIndex = example_json_1.default.findIndex(function (user) { return user.id === id; });
        example_json_1.default[pokemonIndex] = __assign(__assign({}, example_json_1.default[pokemonIndex]), data);
        return example_json_1.default[pokemonIndex];
    };
    ExampleService.prototype.deleteOne = function (id) { };
    return ExampleService;
}());
exports.ExampleService = ExampleService;
exports.default = new ExampleService();
