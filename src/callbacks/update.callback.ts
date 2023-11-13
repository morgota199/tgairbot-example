import { HandlerCallback, useStorage } from "@tgairbot/core";
import { userForm } from "../forms/user.form";
import { methods } from "../index";

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

  await methods.sendMessage({ chatId: params.chat.id, text: `Success!!!` });
};
