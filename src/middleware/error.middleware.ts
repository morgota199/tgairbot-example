import { useLayout, useMiddleware } from "@tgairbot/core";

export const errorMiddleware = useMiddleware<"message">(
  async (wrapper, next) => {
    try {
      await useLayout(wrapper.identId)!.in();

      return await next();
    } catch (e) {
      await useLayout(wrapper.identId, "error")!.in(e);
    } finally {
      console.log("Current layout: ", wrapper.layout.name);
    }
  },
);
