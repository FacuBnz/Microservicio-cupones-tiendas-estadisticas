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
exports.getStats = void 0;
const typeorm_1 = require("typeorm");
const Coupon_1 = require("../entity/Coupon");
const getStats = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const existingCoupons = yield typeorm_1.getRepository(Coupon_1.Coupon).count();
    const allocatedCoupons = yield typeorm_1.getRepository(Coupon_1.Coupon).count({ where: { customerEmail: typeorm_1.Not(typeorm_1.IsNull()) } });
    const unallocatedCoupons = yield typeorm_1.getRepository(Coupon_1.Coupon).count({ where: { customerEmail: typeorm_1.IsNull() } });
    const assignedByDay = yield typeorm_1.getRepository(Coupon_1.Coupon).createQueryBuilder("coupon").select("cast(coupon.assigned_at as DATE) as DATE, count(coupon) as ASSIGNED").where("coupon.assigned_at is not null").groupBy("cast(coupon.assigned_at as DATE)").orderBy("cast(assigned_at as DATE)").getRawMany();
    const result = {
        totalCoupons: existingCoupons,
        allocatedCoupons: allocatedCoupons,
        unallocatedCoupons: unallocatedCoupons,
        couponsAssignedByDay: assignedByDay
    };
    res.json(result);
});
exports.getStats = getStats;
