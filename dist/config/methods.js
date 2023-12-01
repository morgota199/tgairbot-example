"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.methods = void 0;
const core_1 = require("@tgairbot/core");
const config_1 = require("./config");
exports.methods = new core_1.Methods(config_1.Config.getToken());
