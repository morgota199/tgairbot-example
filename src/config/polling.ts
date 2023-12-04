import { Polling } from "@tgairbot/core";
import { Config } from "./config";

const polling = new Polling(Config.getToken());

polling.start().then()

export { polling }
