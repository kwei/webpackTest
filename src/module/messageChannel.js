import { websocket } from './websocket';
import { Logger } from "./logger";
const logger = Logger({className: "messageChannel"});

export const channel = websocket.init();
if (channel) {
    channel.onopen = () => {
        logger.info(`websocket onopen`);
        channel.send(JSON.stringify({
            "action": "sendmessage",
            "message": "Hello",
        }));
    };

    channel.onclose = () => {
        logger.info(`websocket onclose`);
    };

    channel.onmessage = (event) => {
        logger.info(`websocket onmessage event: ${event.data}`);
    };
}