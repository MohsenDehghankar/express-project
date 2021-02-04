"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const clickRateSchema = new mongoose_1.Schema({
    time: Date,
    ip: String,
});
const clickRateModel = mongoose_1.model("ClickRateModel", clickRateSchema);
exports.default = clickRateModel;
//# sourceMappingURL=ClickEvent.js.map