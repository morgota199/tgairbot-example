import { TgAirBot, useStorage, WrapperId } from "@tgairbot/core";
import { methods } from "../index";
import { UserFormState } from "../callbacks/update.callback";

export const nameForm = async (
  message: TgAirBot.Message,
  wrapperId: WrapperId,
) => {
  const storage = useStorage<Partial<UserFormState>>(wrapperId);
  const state = await storage.getData();

  if (!state?.firstName) {
    await storage.setData({ firstName: message.text });

    return methods.sendMessage({
      chatId: message.chat.id,
      text: `Your first name ${message.text}, Enter your last name.`,
    });
  }

  if (!state?.lastName) {
    await storage.setData({ lastName: message.text });

    await methods.sendMessage({
      chatId: message.chat.id,
      text: `Your last name  ${message.text}, Enter your phone.`,
    });
  }

  const updatedState = await storage.getData();
  if (!(updatedState.firstName && updatedState.lastName)) return;

  return `${updatedState.firstName}, ${updatedState.lastName}`;
};
