import { HandlerCallback } from "@tgairbot/core";
import { overtimeMiddleware } from "./overtime.middleware";
import { clearHistoryMiddleware } from "./clear-history.middleware";
import { errorMiddleware } from "./error.middleware";
import { startMiddleware } from "./start.middleware";
import { textMiddleware } from "./text.middleware";

export default (callback: HandlerCallback) => {
  return overtimeMiddleware(
    clearHistoryMiddleware(
      errorMiddleware(startMiddleware(textMiddleware(callback))),
    ),
  );
}