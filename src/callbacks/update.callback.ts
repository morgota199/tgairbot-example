import { HandlerCallback, useStorage, Telegram } from "@tgairbot/core";
import { userForm } from "../forms/user.form";
import { methods } from "../config/methods";

export interface UserFormState {
  firstName: string;
  lastName: string;
  phone: string;
}

export const onUpdateCallback: HandlerCallback<"message"> = async ({
  params,
  wrapper,
}) => {
  await userForm(wrapper.identId, wrapper.data);

  const storage = useStorage<UserFormState>(wrapper.identId);

  const data = await storage.getData();
  if (!(data.firstName && data.lastName && data.phone)) return;

  await storage.clear();

  await methods.sendMessage({
    chatId: params.chat.id,
    parseMode: Telegram.ParseMode.HTML,
    text: `Success!!!
  First name: <b>${data.firstName}</b>
  Last name: <b>${data.lastName}</b>
  Phone: <b>${data.phone}</b>
  `,
  });
};
