"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const routes_1 = require("./routes");
const app = express();
exports.app = app;
app.use(morgan("dev"));
app.use(routes_1.router);
app.listen(3000, () => console.log("[SERVER] is up and running on 3000 ..."));
//# sourceMappingURL=server.js.map