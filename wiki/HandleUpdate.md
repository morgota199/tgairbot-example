# Handle updates

You can receive Telegram updates using UpdateHandler.

Note: To receive the update, [Pooling](https://github.com/tgairbot/core/wiki/Pooling) or [Webhook](https://github.com/tgairbot/core/wiki/Webhook) must be previously launched.

## Usage

Easy to use:

```typescript
import { Polling, UpdateHandler, HandlerCallbackParams } from "@tgairbot/core";

const TOKEN = "YOUR_TOKEN";

const polling = new Polling(TOKEN, { /* ...polling options */ });

polling.start().then();

UpdateHandler.onMessage((params: HandlerCallbackParams<"message">) => {
    /* handle callback */
})
```

Example for usage:
```typescript
UpdateHandler.onUpdates((params: HandlerCallbackParams) => {
    /* handle all updates */
});

UpdateHandler.onMessage((params: HandlerCallbackParams<"message">) => {
    /* handle message */
});

UpdateHandler.onEditedMessage((params: HandlerCallbackParams<"editedMessage">) => {
    /* handle edited message */
});

UpdateHandler.onChannelPost((params: HandlerCallbackParams<"channelPost">) => {
    /* handle channel post */
});

UpdateHandler.onEditedChannelPost((params: HandlerCallbackParams<"editedChannelPost">) => {
    /* handle edited channel post */
});

UpdateHandler.onPoll((params: HandlerCallbackParams<"poll">) => {
    /* handle poll */
});

UpdateHandler.onPollAnswer((params: HandlerCallbackParams<"pollAnswer">) => {
    /* handle poll answer */
});

UpdateHandler.onPreCheckoutQuery((params: HandlerCallbackParams<"preCheckoutQuery">) => {
    /* handle pre checkout query */
});

UpdateHandler.onShippingQuery((params: HandlerCallbackParams<"shippingQuery">) => {
    /* handle shipping query */
});

UpdateHandler.onCallbackQuery((params: HandlerCallbackParams<"callbackQuery">) => {
    /* handle callback query */
});

UpdateHandler.onMyChatMember((params: HandlerCallbackParams<"myChatMember">) => {
    /* handle chat member updated */
});

UpdateHandler.onChatMember((params: HandlerCallbackParams<"chatMember">) => {
    /* handle chat member updated */
});

UpdateHandler.onChatJoinRequest((params: HandlerCallbackParams<"chatJoinRequest">) => {
    /* handle chat join request */
});

UpdateHandler.onInlineQuery((params: HandlerCallbackParams<"inlineQuery">) => {
    /* handle inline query */
});

UpdateHandler.onChosenInlineResult((params: HandlerCallbackParams<"chosenInlineResult">) => {
    /* handle chosen inline result */
});
```
