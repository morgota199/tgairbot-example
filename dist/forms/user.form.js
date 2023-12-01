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
exports.userForm = void 0;
const core_1 = require("@tgairbot/core");
const name_form_1 = require("./name.form");
const phone_form_1 = require("./phone.form");
const userForm = (id, message) => __awaiter(void 0, void 0, void 0, function* () {
    const storage = (0, core_1.useStorage)(id);
    const state = yield storage.getState();
    if (state === name_form_1.nameForm.name) {
        const fullName = yield (0, name_form_1.nameForm)(message, id);
        if (!fullName)
            return;
        return storage.setState(phone_form_1.phoneForm.name);
    }
    if (state === phone_form_1.phoneForm.name) {
        const phone = yield (0, phone_form_1.phoneForm)(message, id);
        if (!phone)
            return;
        return storage.setState();
    }
});
exports.userForm = userForm;
