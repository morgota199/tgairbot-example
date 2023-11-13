# Filter

<b>useFilter</b> universal hook for filtering that supports callbacks and inline implementations.

## Usage

Easy to use:

```typescript
import { useFilter, Polling, Methods, TgAirBot, UpdateHandler, HandlerCallbackParams } from "@tgairbot/core";

const TOKEN = "YOUR_TOKEN";

const polling = new Polling(TOKEN);
const methods = new Methods(TOKEN);

polling.start().then();

UpdateHandler.onMessage(async ({ params }: HandlerCallbackParams<"message">) => {
    await useFilter(/\/start/, params, async (command) => {
        await methods.sendMessage({
            replyToMessageId: params.messageId,
            chatId: params.chat.id,
            text: "Hello world!!!",
        });
    });
});
```

Example for usage:

### String
```typescript
UpdateHandler.onMessage(async ({ params }: HandlerCallbackParams<"message">) => {
    useFilter("/start", params, async (text: string) => {
        await methods.sendMessage({
            replyToMessageId: params.messageId,
            chatId: params.chat.id,
            text: "Hello world!!!",
        });
    });
});

UpdateHandler.onMessage(async ({ params }: HandlerCallbackParams<"message">) => {
    const isMatch = useFilter("/start", params);
    if (!isMatch) return;

    await methods.sendMessage({
        replyToMessageId: params.messageId,
        chatId: params.chat.id,
        text: "Hello world!!!",
    });
});
```

### Boolean
```typescript
UpdateHandler.onMessage(async ({ params }: HandlerCallbackParams<"message">) => {
    useFilter(params.text === "/start", params, async () => {
        await methods.sendMessage({
            replyToMessageId: params.messageId,
            chatId: params.chat.id,
            text: "Hello world!!!",
        });
    });
});

UpdateHandler.onMessage(async ({ params }: HandlerCallbackParams<"message">) => {
    const isMatch = useFilter(params.text === "/start", params);
    if (!isMatch) return;

    await methods.sendMessage({
        replyToMessageId: params.messageId,
        chatId: params.chat.id,
        text: "Hello world!!!",
    });
});
```

### RegExp
```typescript
UpdateHandler.onMessage(async ({ params }: HandlerCallbackParams<"message">) => {
    await useFilter(/\/start/, params, async (command: RegExpMatchArray) => {
        await methods.sendMessage({
            replyToMessageId: params.messageId,
            chatId: params.chat.id,
            text: "Hello world!!!",
        });
    });
});

UpdateHandler.onMessage(async ({ params }: HandlerCallbackParams<"message">) => {
    const isMatch = useFilter(/\/start/, params);
    if (!isMatch) return;

    await methods.sendMessage({
        replyToMessageId: params.messageId,
        chatId: params.chat.id,
        text: "Hello world!!!",
    });
});
```

### Function
```typescript
UpdateHandler.onMessage(async ({ params }: HandlerCallbackParams<"message">) => {
    await useFilter(async () => params.text === "/start", params, async (res) => {
        await methods.sendMessage({
            replyToMessageId: params.messageId,
            chatId: params.chat.id,
            text: "Hello world!!!",
        });
    });
});

UpdateHandler.onMessage(async ({ params }: HandlerCallbackParams<"message">) => {
    const isMatch = await useFilter(async () => params.text === "/start", params);
    if (!isMatch) return;

    await methods.sendMessage({
        replyToMessageId: params.messageId,
        chatId: params.chat.id,
        text: "Hello world!!!",
    });
});
```
