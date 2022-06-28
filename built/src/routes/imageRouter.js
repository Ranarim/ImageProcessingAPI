"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var getImageController_1 = require("../controllers/getImageController");
var router = (0, express_1.Router)();
router.get('/:imageName', getImageController_1.getImage);
exports.default = router;
