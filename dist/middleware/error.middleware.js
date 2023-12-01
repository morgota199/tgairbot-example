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
exports.errorMiddleware = void 0;
const core_1 = require("@tgairbot/core");
exports.errorMiddleware = (0, core_1.useMiddleware)((wrapper, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, core_1.useLayout)(wrapper.identId).in();
        return yield next();
    }
    catch (e) {
        yield (0, core_1.useLayout)(wrapper.identId, "error").in(e);
    }
    finally {
        console.log("Current layout: ", wrapper.layout.name);
    }
}));
