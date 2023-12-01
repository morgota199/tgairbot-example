# Middleware

You can use a hook <b>'useMiddleware'</b> to create middleware.  

## Usage

Easy to use:

```typescript
import { filter, Polling, Methods, TgAirBot, UpdateHandler, useMiddleware } from "@tgairbot/core";

const TOKEN = "YOUR_TOKEN";

const polling = new Polling(TOKEN);
const methods = new Methods(TOKEN);

polling.start().then();

const startMiddleware = useMiddleware<"message">((wrapper, update, next) => {
    const isStart = filter(/\/start/, wrapper.data);
    if (!isStart) return;

    next();
});

const onMessageCallback: HandlerCallback<"message"> = async ({
    params,
    wrapper,
}) => {
    await methods.sendMessage({
        replyToMessageId: params.messageId,
        chatId: params.chat.id,
        text: "Hello world!!!",
    });
};

UpdateHandler.onMessage(startMiddleware(onMessageCallback));
```

You can also use chain middleware.

```typescript
const firstMiddleware = useMiddleware<"message">((wrapper, update, next) => {
    console.log("First middleware")

    next();
});

const secondMiddleware = useMiddleware<"message">((wrapper, update, next) => {
    console.log("Second middleware")

    next();
});

const onMessageCallback: HandlerCallback<"message"> = async ({
    params,
    wrapper,
}) => {
    await methods.sendMessage({
        replyToMessageId: params.messageId,
        chatId: params.chat.id,
        text: "Hello world!!!",
    });
};

UpdateHandler.onMessage(firstMiddleware(secondMiddleware(onMessageCallback)));
```
