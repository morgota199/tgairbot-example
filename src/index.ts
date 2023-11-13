import { Polling, Methods, UpdateHandler } from "@tgairbot/core";

import { startMiddleware } from "./middleware/start-middleware";
import { textMiddleware } from "./middleware/text.middleware";
import { onUpdateCallback } from "./callbacks/update.callback";

const TOKEN = "5608595917:AAGDGv6D9heC4nquo_AnuHlDU7w1SUi2bDk";

new Polling(TOKEN).start().then();
export const methods = new Methods(TOKEN);

const updateMiddlewares = startMiddleware(textMiddleware(onUpdateCallback));

UpdateHandler.onUpdates(updateMiddlewares);
