# Wrapper

Dynamic wrapper for telegram update request. A new instance is initialized on each request before middleware is stored and deleted after they are executed.

Each instance has an ID that is taken from the chat or user, if it doesn’t exist then it is set to **“DEFAULT_WRAPPER_ID”**.

## Fields

| Field        | Required | Type             | Default              | Description                                                                                           |
|--------------|----------|------------------|----------------------|-------------------------------------------------------------------------------------------------------|
| **identId**  | True     | Number or String | `DEFAULT_WRAPPER_ID` | ID wrappers linked either to the chat or to the user. Default **"DEFAULT_WRAPPER_ID"**.               |
| **update**   | True     | Update           | -                    | Complete telegram update object.                                                                      |
| **data**     | True     | ConditionalType  | -                    | Telegram update data essence object.                                                                  |
