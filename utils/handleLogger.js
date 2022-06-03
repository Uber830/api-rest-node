import { IncomingWebhook } from "@slack/webhook";

const bot = new IncomingWebhook(process.env.KEY_SLACK);

const loggerStream = {
  write: (message) => {
    bot.send({
      text: message,
    });
  },
};

export default loggerStream;
