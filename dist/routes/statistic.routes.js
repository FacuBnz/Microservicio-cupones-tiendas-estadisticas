"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const statistic_controller_1 = require("../controllers/statistic.controller");
const router = express_1.Router();
router.get('/stats', statistic_controller_1.getStats);
exports.default = router;
