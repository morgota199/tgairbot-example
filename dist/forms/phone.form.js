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
exports.phoneForm = void 0;
const core_1 = require("@tgairbot/core");
const methods_1 = require("../config/methods");
const phoneForm = (message, wrapperId) => __awaiter(void 0, void 0, void 0, function* () {
    const storage = (0, core_1.useStorage)(wrapperId);
    const state = yield storage.getData();
    if (!(state === null || state === void 0 ? void 0 : state.phone)) {
        yield storage.setData({ phone: message.text });
        yield methods_1.methods.sendMessage({
            chatId: message.chat.id,
            parseMode: core_1.Telegram.ParseMode.HTML,
            text: `Your phone <b>${message.text}</b>.`,
        });
    }
    const updatedState = yield storage.getData();
    if (!updatedState.phone)
        return;
    return updatedState.phone;
});
exports.phoneForm = phoneForm;
