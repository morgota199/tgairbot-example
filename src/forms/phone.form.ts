import { TgAirBot, useStorage, WrapperId, Telegram } from "@tgairbot/core";
import { UserFormState } from "../callbacks/update.callback";
import { methods } from "../config/methods";

export const phoneForm = async (
  message: TgAirBot.Message,
  wrapperId: WrapperId,
): Promise<string | undefined> => {
  const storage = useStorage<Partial<UserFormState>>(wrapperId);
  const state = await storage.getData();

  if (!state?.phone) {
    await storage.setData({ phone: message.text });

    await methods.sendMessage({
      chatId: message.chat.id,
      parseMode: Telegram.ParseMode.HTML,
      text: `Your phone <b>${message.text}</b>.`,
    });
  }

  const updatedState = await storage.getData();
  if (!updatedState.phone) return;

  return updatedState.phone as string;
};
