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
Object.defineProperty(exports, "__esModule", { value: true });
exports.startMiddleware = void 0;
const core_1 = require("@tgairbot/core");
const name_form_1 = require("../forms/name.form");
const methods_1 = require("../config/methods");
exports.startMiddleware = (0, core_1.useMiddleware)((wrapper, next) => __awaiter(void 0, void 0, void 0, function* () {
    const isStart = (0, core_1.useFilter)(/\/start/, wrapper.data);
    if (!isStart)
        return yield next();
    const storage = (0, core_1.useStorage)(wrapper.identId);
    yield storage.clear();
    yield storage.setState(name_form_1.nameForm.name);
    return yield methods_1.methods.sendMessage({
        chatId: wrapper.data.chat.id,
        text: `Hello!!! Enter your first name`,
    });
}));
