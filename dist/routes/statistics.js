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
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const ClickEvent_1 = __importDefault(require("../models/ClickEvent"));
/* GET home page. */
router.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let ips = [];
    let times = [];
    yield ClickEvent_1.default.find((err, results) => {
        if (err) {
            console.log("error: ", err);
            throw err;
        }
        ips = results.map((v) => v.ip);
        times = results.map((v) => v.time.toString());
    });
    res.render("statistics", { title: "Statistics!", ips, times });
}));
exports.default = router;
//# sourceMappingURL=statistics.js.map