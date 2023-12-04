import { useMiddleware, useStorage } from "@tgairbot/core";

export const overtimeMiddleware = useMiddleware(async (wrapper, next) => {
  console.log(
    wrapper.identId,
    "================================================>",
  );
  const start = new Date();

  await next();

  const end = new Date();

  console.log(
    "Request overtime: ",
    (end.valueOf() - start.valueOf()) / 1000,
    "s",
  );

  const storage = useStorage(wrapper.identId)

  const state = await storage.getState()
  const data = await storage.getData()

  console.log("Request storage state: ", state)
  console.log("Request storage data: ", JSON.stringify(data, null, 2))
});
