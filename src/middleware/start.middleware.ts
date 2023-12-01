import { useFilter, useMiddleware, useStorage } from "@tgairbot/core";

import { nameForm } from "../forms/name.form";
import { UserFormState } from "../callbacks/update.callback";
import { methods } from "../config/methods";

export const startMiddleware = useMiddleware<"message">(
  async (wrapper, next) => {
    const isStart = useFilter(/\/start/, wrapper.data);
    if (!isStart) return await next();

    const storage = useStorage<UserFormState>(wrapper.identId);
    await storage.clear();
    await storage.setState(nameForm.name);

    return await methods.sendMessage({
      chatId: wrapper.data.chat.id,
      text: `Hello!!! Enter your first name`,
    });
  },
);
