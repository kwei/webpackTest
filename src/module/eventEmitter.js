const { EventEmitter } = require('fbemitter');
const emitter = EventEmitter();

const eventEmitter = {
    addListener: (eventType, callback) => {
        console.log("Add listener of ", eventType);
        emitter.addListener(eventType, callback);
    },
    emit: (eventType, ...params) => {
        console.log("Emit event of ", eventType);
        emitter.emit(eventType, ...params);
    },
    removeAllListeners: (eventType = null) => {
        console.log("Remove event listener ", eventType);
        emitter.removeAllListeners();
    }
};

export default eventEmitter;