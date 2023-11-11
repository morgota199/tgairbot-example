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
const core_1 = require("@tgairbot/core");
const TOKEN = "5608595917:AAGDGv6D9heC4nquo_AnuHlDU7w1SUi2bDk";
const polling = new core_1.Polling(TOKEN);
const methods = new core_1.Methods(TOKEN);
polling.start().then();
const firstMiddleware = (0, core_1.useMiddleware)((wrapper, state, next) => __awaiter(void 0, void 0, void 0, function* () {
    const isStart = (0, core_1.filter)(/\/start/, wrapper.data);
    if (isStart) {
        core_1.GlobalFSM.clear(wrapper.identId);
        return yield methods.sendMessage({
            chatId: wrapper.data.chat.id,
            text: `Hello!!! Enter your first name`,
        });
    }
    next();
}));
const onMessageCallback = ({ params, wrapper, state, }) => __awaiter(void 0, void 0, void 0, function* () {
    const isText = (0, core_1.filter)(!!params.text, params);
    if (!isText) {
        return yield methods.sendMessage({
            chatId: params.chat.id,
            text: `Unknown message type`,
        });
    }
    const fullName = yield form(params, state);
    if (fullName) {
        core_1.GlobalFSM.clear(wrapper.identId);
        yield methods.sendMessage({
            chatId: params.chat.id,
            text: `Success!!!`,
        });
    }
});
const form = (message, state) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(state === null || state === void 0 ? void 0 : state.firstName)) {
        state = core_1.GlobalFSM.setState(message.chat.id, {
            firstName: message.text,
        });
        yield methods.sendMessage({
            chatId: message.chat.id,
            text: `Your first name ${state.firstName}, Enter your last name.`,
        });
    }
    else if (!(state === null || state === void 0 ? void 0 : state.lastName)) {
        state = core_1.GlobalFSM.setState(message.chat.id, {
            lastName: message.text,
        });
        yield methods.sendMessage({
            chatId: message.chat.id,
            text: `Your last name  ${state.lastName}`,
        });
    }
    if (state.firstName && state.lastName) {
        yield methods.sendMessage({
            chatId: message.chat.id,
            text: `Your name ${state.firstName}, ${state.lastName}`,
        });
        return `${state.firstName}, ${state.lastName}`;
    }
});
core_1.UpdateHandler.onMessage(firstMiddleware(onMessageCallback));
