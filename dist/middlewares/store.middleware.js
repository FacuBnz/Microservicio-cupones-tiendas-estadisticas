"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateIdStore = exports.validateNameAndAddress = exports.ValidationGetStores = void 0;
const joi_1 = __importDefault(require("joi"));
const ValidationGetStores = (req, res, next) => {
    if (Object.keys(req.query).length !== 1)
        return res.status(400).json({ error: "data incorrect" });
    const { page, name } = req.query;
    if (page === "" || name === "" || !isNaN(Number(name)))
        return res.status(400).json({ error: "data incorrect" });
    if (page && Number(page) < 1)
        return res.status(400).json({ error: "data incorrect" });
    next();
};
exports.ValidationGetStores = ValidationGetStores;
const validateNameAndAddress = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = joi_1.default.object({
        name: joi_1.default.string().required(),
        address: joi_1.default.string().required()
    });
    try {
        yield schema.validateAsync(req.body);
    }
    catch (err) {
        return res.status(422).json(err);
    }
    next();
});
exports.validateNameAndAddress = validateNameAndAddress;
const validateIdStore = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const schema = joi_1.default.object({
        id: joi_1.default.number().integer().positive().required()
    });
    try {
        yield schema.validateAsync(req.params);
    }
    catch (err) {
        return res.status(400).json(err);
    }
    next();
});
exports.validateIdStore = validateIdStore;
