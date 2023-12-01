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
exports.textMiddleware = void 0;
const core_1 = require("@tgairbot/core");
exports.textMiddleware = (0, core_1.useMiddleware)((wrapper, next) => __awaiter(void 0, void 0, void 0, function* () {
    const isText = (0, core_1.useFilter)(!!wrapper.data.text, wrapper.data);
    if (isText)
        return yield next();
    throw new Error(`Unknown message type`);
}));
