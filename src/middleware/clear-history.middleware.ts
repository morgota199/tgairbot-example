import { useMiddleware } from "@tgairbot/core";
import { methods } from "../config/methods";

export const clearHistoryMiddleware = useMiddleware(async (wrapper, next) => {
  await next();

  await methods.deleteMessage({
    chatId: wrapper.data.chat.id,
    messageId: wrapper.data.messageId,
  });
});
