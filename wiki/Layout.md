# Layout

Layer for reverse branching logic. It is possible to transfer with preloaded data.


* ### Create base layer
```typescript
import { createLayout } from "@tgairbot/core";

export const DefaultLayout = createLayout("default");
```

* ### Init function
Executed when the layer is initialized.

```typescript
import { createLayout } from "@tgairbot/core";

export const DefaultLayout = createLayout("default", {
    init: (props, wrapper) => {
        
    }
});
```

* ### Preload data

The data is preloaded when the layer context is initialized.
#### Object data
```typescript
import { createLayout } from "@tgairbot/core";

export const DefaultLayout = createLayout("default", {
    data: {
        custom: "data"
    }
});
```

#### Function data
```typescript
import { createLayout, Wrapper } from "@tgairbot/core";

export const DefaultLayout = createLayout("default", {
  data: (wrapper: Wrapper) => ({
    custom: "data"
  })
});
```

* ### Middlewares
Executed when the layer is initialized.

```typescript
import { createLayout, Wrapper, useMiddleware } from "@tgairbot/core";

export const DefaultLayout = createLayout("default", {
  middlewares: [
    useMiddleware((wrapper: Wrapper, next) => {
      next()
    })
  ]
});
```

---
## Layout context
The layer context associated with the update request. You can transfer custom data during initialization.
Custom data can be changed and overwritten. <br>
And also get or change preloaded layer data.

- Get layer context
    ```typescript
    const layoutContext  = useLayout(wrapper.identId);

    await layoutContext.in("Custom props")
    ```
- Layout context fields

| Field        | Type     | Arguments | Return type | Default   | Description                                     |
|--------------|----------|-----------|-------------|-----------|-------------------------------------------------|
| **name**     | String   | -         | -           | `default` | Custom layout name. Default **"default"**.      |
| **in**       | Function | ANY       | void        | -         | Initialize layout. Arguments is you custom data |
| **getProps** | Function | -         | ANY         | -         | Get you custom props                            |
| **setProps** | Function | ANY       | void        | -         | Set you custom props                            |
| **getData**  | Function | -         | ANY         | -         | Get you preload data                            |
| **setData**  | Function | ANY       | ANY         | -         | Set you preload data                            |
