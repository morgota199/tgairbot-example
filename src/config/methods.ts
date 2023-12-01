import { Methods } from "@tgairbot/core";
import { Config } from "./config";

export const methods = new Methods(Config.getToken());
