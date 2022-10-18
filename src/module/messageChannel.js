import { websocket } from './websocket';
import { Logger } from "./logger";
const logger = Logger({className: "messageChannel"});

export const channel = websocket.init();
if (channel) {
    channel.onopen = () => {
        logger.info(`websocket onopen`);
    };

    channel.onclose = () => {
        logger.info(`websocket onclose`);
    };

    channel.onmessage = () => {
        logger.info(`websocket onmessage`);
    };
}