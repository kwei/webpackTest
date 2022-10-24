import '../../css/party.scss';
import React, {useEffect, useRef, useState} from "react";
import { webrtcHandler } from "../../module/webrtc";
import { Logger } from "../../module/logger";
import { shallowEqual, useSelector } from "react-redux";
import { initBroadcastChannel } from "../../module/broadcastChannel";

const logger = Logger({className: "PartyPage"});
const reader = new FileReader();
let role = "host";
let signaling = null;

const dragOverHandler = (event) => event.preventDefault();

const PartyPage = () => {
    const [peerConnection, setPeerConnection] = useState(null);
    const [candidateStr, setCandidateStr] = useState("");
    const [remoteCandidate, setRemoteCandidate] = useState("");
    const [dsp, setDsp] = useState(null);
    const userName = useSelector(state => state.userReducer.name, shallowEqual);
    const roomID = useSelector(state => state.partyPageReducer.roomID, shallowEqual);
    logger.info(`room id -> ${roomID}`);
    if (roomID !== "HOST") {
        role = "slave";
    }
    logger.info(`Role -> ${role}`);
    logger.info(`player name -> ${userName}`);

    const downloadIframeRef = useRef(null);
    const isMount = useRef(false);

    useEffect(() => {
        if (isMount.current) {
            onIceCandidate(peerConnection);
        }
        isMount.current = true;
    }, [peerConnection]);

    useEffect( () => {
        if (isMount.current) {
            handleDsp().then();
        }
        isMount.current = true;
    }, [dsp]);

    reader.addEventListener('load', async () => {
        if (peerConnection) setDsp(JSON.parse(reader.result));
    });

    const handleDsp = async () => {
        if (peerConnection) {
            if (role === "slave") {
                webrtcHandler.handleOffer(peerConnection, dsp).then();
                const answer = await webrtcHandler.createAnswer(peerConnection);
                const blob = new Blob([JSON.stringify(answer)], {type: 'octet/stream'});
                downloadIframeRef.current.src = window.URL.createObjectURL(blob);
                if (peerConnection.currentLocalDescription && peerConnection.currentRemoteDescription) {
                    logger.success(`Complete in transferring offer and answer.`);
                }
            } else {
                if (peerConnection) {
                    webrtcHandler.handleAnswer(peerConnection, dsp).then();
                    logger.success(`Complete in transferring offer and answer.`);
                }
            }
        }
    };

    const onIceCandidate = (peerConnection) => {
        logger.info("Set listener on ice candidate");
        peerConnection.onicecandidate = e => {
            const message = {
                type: 'candidate',
                candidate: null,
            };
            if (e.candidate) {
                message.candidate = e.candidate.candidate;
                message.sdpMid = e.candidate.sdpMid;
                message.sdpMLineIndex = e.candidate.sdpMLineIndex;
            }
            signaling.postMessage(message);

            if (e.candidate && e.candidate.candidate) {
                logger.success(`Get Ice Candidate`);
                setCandidateStr(e.candidate.candidate.toString());
            }
        };
    };

    const dropHandler = async (event) => {
        event.preventDefault();
        const file = event.dataTransfer.items ? [...event.dataTransfer.items][0].getAsFile() : [...event.dataTransfer.files][0].getAsFile();
        reader.readAsText(file);
    };

    const initPeerConnection = async () => {
        const pc = await webrtcHandler.createPeer();
        signaling = initBroadcastChannel(pc, "webrtc");
        setPeerConnection(pc);
        // if (role === "host") {
        //     const offer = await webrtcHandler.createOffer(pc);
        //     const blob = new Blob([JSON.stringify(offer)], {type: 'octet/stream'});
        //     downloadIframeRef.current.src = window.URL.createObjectURL(blob);
        // }
    };

    return (
        <div className="party">
            <div className="info-block">
                Hello {userName} !
            </div>
            <div className={"candidate-text"}
                 onClick={() => {
                     navigator.clipboard.writeText(candidateStr).then();
                 }}
            >
                {candidateStr}
            </div>
            <div className={"input-candidate"}>
                <input
                    type={"text"}
                    value={remoteCandidate}
                    placeholder={"貼上 Candidate 訊息"}
                    onChange={(event) => setRemoteCandidate(event.target.value)}
                />
                <div className={"setCandidate-btn"}
                     onClick={() => {
                         if (peerConnection !== null) {
                             logger.success(`Add Ice Candidate`);
                             peerConnection.addIceCandidate(new RTCIceCandidate({
                                 sdpMLineIndex: 0,
                                 sdpMid: 0,
                                 candidate: remoteCandidate,
                             })).then();
                         }
                     }}
                >
                    Set Candidate
                </div>
            </div>
            <div className="downloader">
                <div className="download-block">
                    <iframe ref={downloadIframeRef} id="downloadIframe" style={{"display": "none"}}></iframe>
                    <div className="initPeerConnection" onClick={initPeerConnection}>Generate</div>
                </div>
            </div>
            <div className="uploader"
                 id="drop_zone"
                 onDrop={(e) => dropHandler(e)}
                 onDragOver={(e) => dragOverHandler(e)}
            >
                <div className="uploader-text">Drop Here!</div>
            </div>
        </div>
    );
};

export default React.memo(PartyPage);