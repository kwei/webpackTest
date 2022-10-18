import { Logger } from "./logger";

const { EventEmitter } = require('fbemitter');
const emitter = new EventEmitter();

const logger = Logger("eventEmitter");

export const eventEmitter = {
    addListener: (eventName, ...rest) => {
        logger.info(`Add listener of ${eventName}`);
        emitter.addListener(eventName, ...rest);
    },
    emit: (eventName, ...rest) => {
        logger.info(`Emit event of ${eventName}`);
        emitter.emit(eventName, ...rest);
    },
    removeAllListeners: (params = null) => {
        logger.info(`Remove event listener ${params}`);
        emitter.removeAllListeners(params);
    }
};