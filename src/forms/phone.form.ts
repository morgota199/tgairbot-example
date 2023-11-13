import { TgAirBot, useStorage, WrapperId } from "@tgairbot/core";
import { methods } from "../index";
import { UserFormState } from "../callbacks/update.callback";

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
      text: `Your phone ${message.text}.`,
    });
  }

  const updatedState = await storage.getData();
  if (!updatedState.phone) return;

  return updatedState.phone as string;
};
