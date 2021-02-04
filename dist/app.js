"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/index"));
const users_1 = __importDefault(require("./routes/users"));
const statistics_1 = __importDefault(require("./routes/statistics"));
const click_1 = __importDefault(require("./routes/click"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
// view engine setup
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(morgan_1.default("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
// routes
app.use("/", index_1.default);
app.use("/click", click_1.default);
app.use("/statistics", statistics_1.default);
app.use("/users", users_1.default);
// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(http_errors_1.default(404));
});
// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
// database
// Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/click-rate-db';
mongoose_1.default.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
// Get the default connection
const db = mongoose_1.default.connection;
// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
exports.default = app;
//# sourceMappingURL=app.js.map