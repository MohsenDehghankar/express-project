"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const clickRateSchema = new mongoose_1.default.Schema({
    time: Date,
    ip: String,
});
const clickRateModel = mongoose_1.default.model("ClickRateModel", clickRateSchema);
exports.default = clickRateModel;
//# sourceMappingURL=ClickEvent.js.map