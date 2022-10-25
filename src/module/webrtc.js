import { getUserMedia } from "./getUserMedia";
import { Logger } from "./logger";

const logger = Logger({className: "webrtc"});
let localStream;

const oniceconnectionstatechange = (e) => {
    logger.info("Ice Connection State Change: " + e.target.iceConnectionState);
}

export const webrtcHandler = {
    createPeer: async () => {
        localStream = await getUserMedia();
        const peerConnection = new RTCPeerConnection();
        peerConnection.oniceconnectionstatechange = async (e) => oniceconnectionstatechange(e);
        localStream.getTracks().forEach(track => peerConnection.addTrack(track, localStream));
        logger.success(`Create Peer Connection`);
        window.localStream = localStream;
        return peerConnection;
    },
    createOffer: async (peerConnection) => {
        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(offer);
        logger.success(`Create Offer`);
        return offer;
    },
    createAnswer: async (peerConnection) => {
        const answer = await peerConnection.createAnswer();
        await peerConnection.setLocalDescription(answer);
        logger.success(`Create Answer`);
        return answer;
    },
    handleOffer: async (peerConnection, offer) => {
        logger.success(`Get Offer`);
        await peerConnection.setRemoteDescription(offer);
        const answer = await peerConnection.createAnswer();
        await peerConnection.setLocalDescription(answer);
        logger.success(`Create Answer`);
        return answer
    },
    handleAnswer: async (peerConnection, answer) => {
        logger.success(`Get Answer`);
        await peerConnection.setRemoteDescription(answer);
    },
    handleCandidate: async (peerConnection, candidate) => {
        logger.success(`Get candidate ${candidate}`);
        if (candidate) await peerConnection.addIceCandidate(candidate.candidate);
    },
};