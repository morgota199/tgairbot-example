import {
  filter,
  Polling,
  Methods,
  UpdateHandler,
  useMiddleware,
  GlobalFSM,
  TgAirBot,
} from "@tgairbot/core";
import { HandlerCallback } from "@tgairbot/core/types/types/handler-callback";

const TOKEN = "5608595917:AAGDGv6D9heC4nquo_AnuHlDU7w1SUi2bDk";

const polling = new Polling(TOKEN);
const methods = new Methods(TOKEN);

polling.start().then();

interface State {
  firstName?: string;
  lastName?: string;
}

const firstMiddleware = useMiddleware<"message">(
  async (wrapper, state, next) => {
    const isStart = filter(/\/start/, wrapper.data);
    if (isStart) {
      GlobalFSM.clear(wrapper.identId);

      return await methods.sendMessage({
        chatId: wrapper.data.chat.id,
        text: `Hello!!! Enter your first name`,
      });
    }

    next();
  },
);

const onMessageCallback: HandlerCallback<"message", State> = async ({
  params,
  wrapper,
  state,
}) => {
  const isText = filter(!!params.text, params);
  if (!isText) {
    return await methods.sendMessage({
      chatId: params.chat.id,
      text: `Unknown message type`,
    });
  }

  const fullName = await form(params, state!);
  if (fullName) {
    GlobalFSM.clear(wrapper.identId);

    await methods.sendMessage({
      chatId: params.chat.id,
      text: `Success!!!`,
    });
  }
};

const form = async (message: TgAirBot.Message, state: State) => {
  if (!state?.firstName) {
    state = GlobalFSM.setState(message.chat.id, {
      firstName: message.text,
    });

    await methods.sendMessage({
      chatId: message.chat.id,
      text: `Your first name ${state.firstName}, Enter your last name.`,
    });
  } else if (!state?.lastName) {
    state = GlobalFSM.setState(message.chat.id, {
      lastName: message.text,
    });

    await methods.sendMessage({
      chatId: message.chat.id,
      text: `Your last name  ${state.lastName}`,
    });
  }

  if (state.firstName && state.lastName) {
    await methods.sendMessage({
      chatId: message.chat.id,
      text: `Your name ${state.firstName}, ${state.lastName}`,
    });

    return `${state.firstName}, ${state.lastName}`;
  }
};

UpdateHandler.onMessage(firstMiddleware(onMessageCallback));
