import { webrtcHandler } from "./webrtc";
import { Logger } from "./logger";

const logger = Logger({className: "broadcastChannel"});

export const initBroadcastChannel = (pc, channelName) => {
    const signaling = new BroadcastChannel(channelName);
    const localStream = window.localStream;

    signaling.onmessage = e => {
        if (!localStream) {
            logger.error('not ready yet');
            return;
        }
        switch (e.data.type) {
            case 'offer':
                logger.info("received offer");
                webrtcHandler.handleOffer(pc, e.data.sdp).then(answer => {
                    sendAnswer(answer).then();
                });
                break;
            case 'answer':
                logger.info("received answer");
                webrtcHandler.handleAnswer(pc, e.data.sdp).then();
                break;
            case 'candidate':
                logger.info("received candidate");
                webrtcHandler.handleCandidate(pc, e.data.candidate).then();
                break;
            case 'ready':
                logger.info("received ready");
                if (pc) {
                    console.log('already in call, ignoring');
                    return;
                }
                makeCall().then();
                break;
            case 'bye':
                logger.info("received bye");
                if (pc) {
                    hangup().then();
                }
                break;
            default:
                logger.error('unhandled', e);
                break;
        }
    };

    async function makeCall() {
        const offer = await pc.createOffer();
        logger.info("Send offer");
        signaling.postMessage({type: 'offer', sdp: JSON.parse(JSON.stringify(offer))});
        await pc.setLocalDescription(offer);
    }

    async function sendAnswer(answer) {
        logger.info("Send answer");
        signaling.postMessage({type: 'answer', sdp: JSON.parse(JSON.stringify(answer))});
    }

    async function hangup() {
        if (pc) {
            pc.close();
            pc = null;
        }
        localStream.getTracks().forEach(track => track.stop());
        window.localStream = null;
    }

    return signaling;
};

