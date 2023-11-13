import { useFilter, useMiddleware } from "@tgairbot/core";
import { methods } from "../index";

export const textMiddleware = useMiddleware<"message">(
  async (wrapper, next) => {
    const isText = useFilter(!!wrapper.data.text, wrapper.data);
    if (isText) return await next();

    return await methods.sendMessage({
      chatId: wrapper.data.chat.id,
      text: `Unknown message type`,
    });
  },
);
