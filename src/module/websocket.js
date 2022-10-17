import { env } from '../../env.js';
import { Logger } from "./logger";

const logger = Logger({className: "websocket"});
const WEBSOCKET_RUL = env.AWS.WEBSOCKET_URL;

export const websocket = {
    init: () => {
        const ws = new WebSocket(WEBSOCKET_RUL);
        if (ws) {
            logger.success(`websocket init`);
            return ws;
        }
        logger.error(`websocket init failed`);
        return null;
    }
};