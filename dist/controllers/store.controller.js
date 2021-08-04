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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStore = exports.createStore = exports.getStores = void 0;
const typeorm_1 = require("typeorm");
const Store_1 = require("../entity/Store");
const getStores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, name } = req.query;
    const count = yield typeorm_1.getRepository(Store_1.Store).count();
    if (page) {
        const stores = yield typeorm_1.getRepository(Store_1.Store).find({ skip: (Number(page) * 10 - 10), take: 10 });
        return res.json({
            data: stores,
            totalStores: count
        });
    }
    if (name) {
        const stores = yield typeorm_1.getRepository(Store_1.Store).findOne({ name: `${name}` });
        if (stores) {
            return res.json({
                data: stores,
                totalStores: count
            });
        }
        else {
            return res.status(404).json({ error: "Not found store" });
        }
    }
});
exports.getStores = getStores;
const createStore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newStore = typeorm_1.getRepository(Store_1.Store).create(req.body);
    const result = yield typeorm_1.getRepository(Store_1.Store).save(newStore);
    return res.json({ data: result, msg: "store created successfully" });
});
exports.createStore = createStore;
const deleteStore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const store = yield typeorm_1.getRepository(Store_1.Store).delete(id);
    return res.status(204).json({ msg: "eliminated successfully" });
});
exports.deleteStore = deleteStore;
