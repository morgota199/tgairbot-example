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
exports.onUpdateCallback = void 0;
const core_1 = require("@tgairbot/core");
const user_form_1 = require("../forms/user.form");
const methods_1 = require("../config/methods");
const onUpdateCallback = ({ params, wrapper, }) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, user_form_1.userForm)(wrapper.identId, wrapper.data);
    const storage = (0, core_1.useStorage)(wrapper.identId);
    const data = yield storage.getData();
    if (!(data.firstName && data.lastName && data.phone))
        return;
    yield storage.clear();
    yield methods_1.methods.sendMessage({
        chatId: params.chat.id,
        parseMode: core_1.Telegram.ParseMode.HTML,
        text: `Success!!!
  First name: <b>${data.firstName}</b>
  Last name: <b>${data.lastName}</b>
  Phone: <b>${data.phone}</b>
  `,
    });
});
exports.onUpdateCallback = onUpdateCallback;
