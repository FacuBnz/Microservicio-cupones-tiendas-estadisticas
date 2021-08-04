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
exports.deleteCoupon = exports.assignCoupon = exports.createCoupon = exports.checkCoupon = void 0;
const typeorm_1 = require("typeorm");
const Coupon_1 = require("../entity/Coupon");
const checkCoupon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, code } = req.query;
    const coupon = yield typeorm_1.getRepository(Coupon_1.Coupon).count({ where: { customerEmail: email, code: code } });
    if (coupon > 0) {
        return res.json({ msg: "code and email validated" });
    }
    return res.status(404).json({ error: "not found code and email" });
});
exports.checkCoupon = checkCoupon;
const createCoupon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newCoupon = typeorm_1.getRepository(Coupon_1.Coupon).create(Object.assign(Object.assign({}, req.body), { expiresAt: () => "now() + interval '30 day'" }));
    const rs = yield typeorm_1.getRepository(Coupon_1.Coupon).save(newCoupon);
    return res.status(201).json({ coupon: rs, msg: "coupon created successfully" });
});
exports.createCoupon = createCoupon;
const assignCoupon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.email;
    const coupon = yield typeorm_1.getRepository(Coupon_1.Coupon).findOne({ where: { customerEmail: email } });
    if (coupon)
        return res.status(422).json({ error: "Customer already has a coupon" });
    const unassigndCoupon = yield typeorm_1.getRepository(Coupon_1.Coupon).findOne({ where: { customerEmail: typeorm_1.IsNull() } });
    const timeNow = new Date(Date.now() + (1000 * 60 * (-(new Date()).getTimezoneOffset()))).toISOString().replace('T', ' ').replace('Z', '');
    const obj = { customerEmail: email, assignedAt: timeNow };
    typeorm_1.getRepository(Coupon_1.Coupon).merge(unassigndCoupon, obj);
    typeorm_1.getRepository(Coupon_1.Coupon).save(unassigndCoupon);
    res.status(201).json({ coupon: { code: unassigndCoupon === null || unassigndCoupon === void 0 ? void 0 : unassigndCoupon.code }, msg: "coupon successfully assigned" });
});
exports.assignCoupon = assignCoupon;
const deleteCoupon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const coupon = yield typeorm_1.getRepository(Coupon_1.Coupon).findOne(id);
    if (!coupon)
        return res.status(404).json({ error: "Not found coupon" });
    if ((coupon === null || coupon === void 0 ? void 0 : coupon.customerEmail) !== null)
        return res.status(405).json({ error: "The coupon cannot be deleted, it has an email address assigned to it" });
    yield typeorm_1.getRepository(Coupon_1.Coupon).delete(id);
    res.status(204).json({ msg: "coupon successfully removed" });
});
exports.deleteCoupon = deleteCoupon;
