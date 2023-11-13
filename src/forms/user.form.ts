import { TgAirBot, useStorage, WrapperId } from "@tgairbot/core";
import { nameForm } from "./name.form";
import { phoneForm } from "./phone.form";
import { UserFormState } from "../callbacks/update.callback";

export const userForm = async (id: WrapperId, message: TgAirBot.Message) => {
  const storage = useStorage<Partial<UserFormState>>(id);
  const state = await storage.getState();

  if (state === nameForm.name) {
    const fullName = await nameForm(message, id);
    if (!fullName) return;

    return storage.setState(phoneForm.name);
  }

  if (state === phoneForm.name) {
    const phone = await phoneForm(message, id);
    if (!phone) return;

    return storage.setState();
  }
};
