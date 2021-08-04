"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coupon = void 0;
const typeorm_1 = require("typeorm");
let Coupon = class Coupon {
};
__decorate([
    typeorm_1.Column({ type: "time without time zone", name: "assigned_at" }),
    __metadata("design:type", Date)
], Coupon.prototype, "assignedAt", void 0);
__decorate([
    typeorm_1.Column({ type: "character", length: 8, name: "code" }),
    __metadata("design:type", String)
], Coupon.prototype, "code", void 0);
__decorate([
    typeorm_1.Column({ name: "customer_email" }),
    __metadata("design:type", String)
], Coupon.prototype, "customerEmail", void 0);
__decorate([
    typeorm_1.PrimaryColumn({ type: "bigint" }),
    __metadata("design:type", Number)
], Coupon.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "time without time zone", name: "expires_at" }),
    __metadata("design:type", Date)
], Coupon.prototype, "expiresAt", void 0);
Coupon = __decorate([
    typeorm_1.Entity({ name: 'coupons' })
], Coupon);
exports.Coupon = Coupon;
