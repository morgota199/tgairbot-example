import { UpdateHandler } from "@tgairbot/core";

import { onUpdateCallback } from "./callbacks/update.callback";

import middlewares from './middlewares'

import "./config/polling";
import "./layouts/default.layout";
import "./layouts/error.layout";

const updateMiddlewares = middlewares(onUpdateCallback)

UpdateHandler.onUpdates(updateMiddlewares);
