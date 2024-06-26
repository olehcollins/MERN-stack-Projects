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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = exports.Order = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const User_1 = require("./User");
const Product_1 = __importDefault(require("./Product"));
class ShippingAddress {
}
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], ShippingAddress.prototype, "fullName", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], ShippingAddress.prototype, "address", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], ShippingAddress.prototype, "city", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], ShippingAddress.prototype, "postalCode", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], ShippingAddress.prototype, "country", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], ShippingAddress.prototype, "lat", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Number)
], ShippingAddress.prototype, "lng", void 0);
class Item {
}
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Item.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Item.prototype, "quantity", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], Item.prototype, "image", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", Number)
], Item.prototype, "price", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: Product_1.default }),
    __metadata("design:type", Object)
], Item.prototype, "product", void 0);
class PaymentResult {
}
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], PaymentResult.prototype, "paymentId", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], PaymentResult.prototype, "status", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], PaymentResult.prototype, "update_time", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], PaymentResult.prototype, "email_address", void 0);
let Order = class Order {
};
exports.Order = Order;
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Array)
], Order.prototype, "orderItems", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", ShippingAddress)
], Order.prototype, "shippingAddress", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: User_1.User }),
    __metadata("design:type", Object)
], Order.prototype, "customer", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String)
], Order.prototype, "paymentMethod", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", PaymentResult)
], Order.prototype, "paymentResult", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, default: 0 }),
    __metadata("design:type", Number)
], Order.prototype, "itemsPrice", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, default: 0 }),
    __metadata("design:type", Number)
], Order.prototype, "shippingPrice", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, default: 0 }),
    __metadata("design:type", Number)
], Order.prototype, "taxPrice", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, default: 0 }),
    __metadata("design:type", Number)
], Order.prototype, "totalPrice", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], Order.prototype, "isPaid", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Date)
], Order.prototype, "paidAt", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], Order.prototype, "isDelivered", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", Date)
], Order.prototype, "deliveredAt", void 0);
exports.Order = Order = __decorate([
    (0, typegoose_1.modelOptions)({ schemaOptions: { timestamps: true } })
], Order);
exports.OrderModel = (0, typegoose_1.getModelForClass)(Order);
