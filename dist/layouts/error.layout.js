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
exports.ErrorLayout = void 0;
const core_1 = require("@tgairbot/core");
const methods_1 = require("../config/methods");
exports.ErrorLayout = (0, core_1.createLayout)("error", {
    // init: async (error, wrapper) => {
    //   await methods.sendMessage({
    //     chatId: wrapper.update.message.chat.id,
    //     parseMode: Telegram.ParseMode.HTML,
    //     text: `❗❗❗ <b>Error: ${error.message}</b>`,
    //   });
    // },
    middlewares: [
        (0, core_1.useMiddleware)((wrapper, next) => __awaiter(void 0, void 0, void 0, function* () {
            yield next();
            const layout = (0, core_1.useLayout)(wrapper.identId, "error");
            const error = layout === null || layout === void 0 ? void 0 : layout.getProps();
            yield methods_1.methods.sendMessage({
                chatId: wrapper.update.message.chat.id,
                parseMode: core_1.Telegram.ParseMode.HTML,
                text: `❗❗❗ <b>Error: ${error.message}</b>`,
            });
        })),
    ],
});
