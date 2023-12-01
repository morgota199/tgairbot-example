import {
  createLayout,
  Telegram,
  useLayout,
  useMiddleware,
} from "@tgairbot/core";
import { methods } from "../config/methods";

export const ErrorLayout = createLayout<"message", Error>("error", {
  // init: async (error, wrapper) => {
  //   await methods.sendMessage({
  //     chatId: wrapper.update.message.chat.id,
  //     parseMode: Telegram.ParseMode.HTML,
  //     text: `❗❗❗ <b>Error: ${error.message}</b>`,
  //   });
  // },
  middlewares: [
    useMiddleware(async (wrapper, next) => {
      await next();

      const layout = useLayout(wrapper.identId, "error");

      const error = layout?.getProps();

      await methods.sendMessage({
        chatId: wrapper.update.message.chat.id,
        parseMode: Telegram.ParseMode.HTML,
        text: `❗❗❗ <b>Error: ${error.message}</b>`,
      });
    }),
  ],
});
