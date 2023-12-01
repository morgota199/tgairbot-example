import { Polling } from "@tgairbot/core";
import { Config } from "./config";

new Polling(Config.getToken()).start().then();
