import '../../css/party.scss';
import React, {useEffect, useRef, useState} from "react";
import { webrtcHandler } from "../../module/webrtc";
import { Logger } from "../../module/logger";
import { useParams } from "react-router-dom";

const logger = Logger({className: "PartyPage"});

const dropHandler = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.items? [...event.dataTransfer.items][0].getAsFile() : [...event.dataTransfer.files][0].getAsFile();
    logger.info(`file ${file}`);
    webrtcHandler.setRemoteDescription(file).then();
    const answer = webrtcHandler.createAnswer().then();
    webrtcHandler.setLocalDescription(answer).then();
};

const dragOverHandler = (event) => event.preventDefault();

let role = "host";

const PartyPage = () => {
    const { name, roomID } = useParams();
    logger.info(`room id -> ${roomID}`);
    if (roomID !== "HOST") {
        role = "slave";
    }
    logger.info(`Role -> ${role}`);
    logger.info(`player name -> ${name}`);
    const [userName, setUserName] = useState(name);
    const [localDescription, setLocalDescription] = useState(null);
    const [saveAvailable, setSaveAvailable] = useState(false);
    const isMounted = useRef(false);
    const downloadIframeRef = useRef(null);

    useEffect(() => {
        // webrtcHandler.init().then((offer => {
        //     if (offer) setLocalDescription(offer);
        // }));
    }, []);

    useEffect(() => {
        if (isMounted.current) {
            if (localDescription) setSaveAvailable(true);
            else setSaveAvailable(false);
        }
        isMounted.current = true;
    }, [localDescription]);

    return (
        <div className="party">
            <div className="info-block">
                Hello {userName}!
            </div>
            <div className="downloader">
                <div className="download-block">
                    <iframe ref={downloadIframeRef} id="downloadIframe" style={{"display": "none"}}></iframe>
                    <div className="file-save" onClick={() => {
                        if (saveAvailable) {
                            logger.info(`Save local description`);
                            const blob = new Blob([JSON.stringify(localDescription)], {type: 'octet/stream'});
                            downloadIframeRef.current.src = window.URL.createObjectURL(blob);
                        } else {
                            logger.info(`Local description not prepared yet`);
                        }

                    }}>
                        Generate
                    </div>
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