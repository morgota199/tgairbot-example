# Storage
The state system is based on the [“Finite State Machine”](https://en.wikipedia.org/wiki/Finite-state_machine) principle. By default, it is stored in the application memory cache (when the application is restarted, the states are reset).
The states are bound to the identId of the [request wrapper](https://github.com/tgairbot/core/wiki/Wrapper).

Can be independently expanded for storage in permanent storage.

## useStorage
The "useStorage" hook allows you to get the state context from the wrapper.

```typescript
import { UpdateHandler, useStorage } from "@tgairbot/core";

UpdateHandler.onUpdates(async ({ wrapper }) => {
    const storage = useStorage(wrapper.identId);

    const data = await storage.getData()
});
```

## StorageContext
StorageContext is a state context object for the user. Retrieves and updates states through an initialized state provider.

## Custom Storage Provider
Create your custom state provider implementation of the base provider.

```typescript
import { Polling, UpdateHandler, useStorage, BaseStorage, StateKey, StateType } from "@tgairbot/core";

new Polling(TOKEN).start().then();

class CustomStorage extends BaseStorage {
    constructor() {
        super();
    }

    getState(key: StateKey): Promise<StateType> {
        return super.getState(key);
    }

    setState(key: StateKey, state?: StateType): Promise<void> {
        return super.setState(key, state);
    }

    async getData(key: StateKey): Promise<any> {
        return super.getData(key);
    }

    setData(key: StateKey, data?: any): Promise<void> {
        return super.setData(key, data);
    }

    clear(): Promise<void> {
        return super.clear();
    }
}

const customStorage = new CustomStorage();

UpdateHandler.useStorage(customStorage);

UpdateHandler.onUpdates(async ({ wrapper }) => {
    const storage = useStorage(wrapper.identId);

    const data = await storage.getData();

    console.log(data)
});
```