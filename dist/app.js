"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const store_routes_1 = __importDefault(require("./routes/store.routes"));
const coupon_routes_1 = __importDefault(require("./routes/coupon.routes"));
const statistic_routes_1 = __importDefault(require("./routes/statistic.routes"));
const app = express_1.default();
app.set('port', process.env.PORT || 3000);
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use('/api', store_routes_1.default);
app.use('/api', coupon_routes_1.default);
app.use('/api', statistic_routes_1.default);
exports.default = app;
