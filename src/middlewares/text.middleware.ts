import { useFilter, useMiddleware } from "@tgairbot/core";

export const textMiddleware = useMiddleware<"message">(
  async (wrapper, next) => {
    const isText = useFilter(!!wrapper.data.text, wrapper.data);
    if (isText) return await next();

    throw new Error(`Unknown message type`);
  },
);
