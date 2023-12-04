import { TgAirBot, useFilter, useStorage, WrapperId } from "@tgairbot/core";
import { nameForm } from "./name.form";
import { phoneForm } from "./phone.form";
import { UserFormState } from "../callbacks/update.callback";

export const userForm = async (id: WrapperId, message: TgAirBot.Message) => {
  const storage = useStorage<Partial<UserFormState>>(id);
  const state = await storage.getState();

  await useFilter(state === nameForm.name, message, async () => {
    const fullName = await nameForm(message, id);
    if (!fullName) return;

    await storage.setState(phoneForm.name);
  })


  await useFilter(state === phoneForm.name, message, async () => {
    const phone = await phoneForm(message, id);
    if (!phone) return;

    await storage.setState();
  })
};
