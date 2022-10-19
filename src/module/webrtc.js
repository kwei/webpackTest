import { getUserMedia } from "./getUserMedia";
import { Logger } from "./logger";

const logger = Logger({className: "webrtc"});

let peerConnection = null;

export const webrtcHandler = {
    init: async () => {
        peerConnection = new RTCPeerConnection({});
        peerConnection.addEventListener('icecandidate', event => logger.verbose(`Should addIceCandidate ${event.candidate}`));
        peerConnection.addEventListener('iceconnectionstatechange', event => logger.verbose(`Ice state change ${event}`));
        getUserMedia().then(stream => {
            stream.getTracks().forEach(track => peerConnection.addTrack(track));
        });
        const offer = await peerConnection.createOffer({
            offerToReceiveAudio: 1,
            offerToReceiveVideo: 1
        });
        await peerConnection.setLocalDescription(offer);
        logger.info(`Offer type: ${typeof(offer)}`);
        logger.info(`Send offer {${offer}} to remote, remote setRemoteDescription, remote createAnswer, and remote setLocalDescription；then, local setRemoteDescription`);
        return offer;
    },
    setRemoteDescription: async (offer) => {
        await peerConnection.setRemoteDescription(offer);
    },
    setLocalDescription: async (answer) => {
        await peerConnection.setLocalDescription(answer);
    },
    createAnswer: async () => {
        return await peerConnection.createAnswer();
    }
};