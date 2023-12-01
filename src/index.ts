import { UpdateHandler } from "@tgairbot/core";

import { onUpdateCallback } from "./callbacks/update.callback";

import { startMiddleware } from "./middleware/start.middleware";
import { textMiddleware } from "./middleware/text.middleware";
import { overtimeMiddleware } from "./middleware/overtime.middleware";
import { clearHistoryMiddleware } from "./middleware/clear-history.middleware";
import { errorMiddleware } from "./middleware/error.middleware";

import "./config/polling";
import "./layouts/default.layout";
import "./layouts/error.layout";

const updateMiddlewares = overtimeMiddleware(
  clearHistoryMiddleware(
    errorMiddleware(startMiddleware(textMiddleware(onUpdateCallback))),
  ),
);

UpdateHandler.onUpdates(updateMiddlewares);
