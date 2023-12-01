"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@tgairbot/core");
const config_1 = require("./config");
new core_1.Polling(config_1.Config.getToken()).start().then();
