import { useMiddleware } from "@tgairbot/core";

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
  console.log(
    wrapper.identId,
    "<================================================",
  );
});
