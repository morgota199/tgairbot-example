import { TgAirBot, useStorage, WrapperId, Telegram } from "@tgairbot/core";
import { UserFormState } from "../callbacks/update.callback";
import { methods } from "../config/methods";

export const nameForm = async (
  message: TgAirBot.Message,
  wrapperId: WrapperId,
) => {
  const storage = useStorage<Partial<UserFormState>>(wrapperId);
  const data = await storage.getData();

  switch (true) {
    case !data?.firstName:
      await storage.setData({ firstName: message.text });

      await methods.sendMessage({
        chatId: message.chat.id,
        parseMode: Telegram.ParseMode.HTML,
        text: `Your first name <b>${message.text}</b>, Enter your last name.`,
      });

      break;
    case !data?.lastName:
      await storage.setData({ lastName: message.text });

      await methods.sendMessage({
        chatId: message.chat.id,
        parseMode: Telegram.ParseMode.HTML,
        text: `Your last name  <b>${message.text}</b>, Enter your phone.`,
      });

      break;
  }

  const updatedData = await storage.getData();
  if (!(updatedData.firstName && updatedData.lastName)) return;

  return `${updatedData.firstName}, ${updatedData.lastName}`;
};
