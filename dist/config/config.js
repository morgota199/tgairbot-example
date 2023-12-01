"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: ".env" });
class ConfigService {
    getToken() {
        return process.env.TOKEN;
    }
}
exports.Config = new ConfigService();
