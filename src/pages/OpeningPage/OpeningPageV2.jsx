import '../../css/opening_v2.scss';
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate  } from "react-router-dom";

import { FiLink } from "react-icons/fi";
import { TiUserOutline, TiKeyOutline } from "react-icons/ti";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { VscDebugDisconnect } from "react-icons/vsc";

import { setUser } from "../../component/Player/userSlice";
import { setRoom, setRole } from "../PartyPage/partyPageSlice";
import { switchPage } from "./openingPageSlice";

import { checkInputs } from "../../module/checkInputs";
import { Storage } from "../../module/storage";
import { Logger } from "../../module/logger";
import { env } from "../../../env";
import { formatWording } from "../../../utils/langUtils";
const logger = Logger({className: "OpeningPage"});
const storage = Storage();


const OpeningPageV2 = () => {
    const navigate = useNavigate();
    const [gameMode, setGameMode] = useState("");
    const localBtnRef = useRef(null);
    const partyBtnRef = useRef(null);
    const confirmBtnRef = useRef(null);

    const dispatch = useDispatch();
    const [userName, setUserName] = useState("");
    const [id, setId] = useState("");
    const [wording, setWording] = useState("");

    const handleLocalBtnClick = () => {
        localBtnRef.current.style.display = "none";
        partyBtnRef.current.style.display = "none";
        setGameMode("local");
    };

    const handlePartyBtnClick = () => {
        localBtnRef.current.style.display = "none";
        partyBtnRef.current.style.display = "none";
        setGameMode("party");
    };

    const handleBackBtnClick = () => {
        localBtnRef.current.style.display = "block";
        partyBtnRef.current.style.display = "block";
        setGameMode("");
    };

    const handleConfirmBtnClick = () => {
        logger.success(`Start with ${gameMode} mode!`);
        if (checkInputs(id)) {
            let _name = formatWording("general.default.playerName", {});
            if (userName !== "") _name = userName;
            if (id !== "") {
                dispatch(setRoom(id));
                logger.info("slave");
                dispatch(setRole("slave"));
            } else {
                logger.info("host");
                dispatch(setRole("host"));
            }
            dispatch(setUser(_name));
            storage.setStorage(env.LOCAL.STORAGE.PLAYER_NAME, _name);
            storage.setStorage(env.LOCAL.STORAGE.ROOM_ID, id);
            navigate("/"+gameMode);
            enterRoom("/"+gameMode);
        } else {
            noticeWording(formatWording("error.invalid.inputRoom", {}), 1500);
        }
    };

    const noticeWording = (str, timeout = 0) => {
        logger.info(`Notice: ${str}`);
        setWording(str);
        if (timeout) setTimeout(() => setWording(''), timeout);
    };

    const enterRoom = (type) => dispatch(switchPage(type));

    const formSheet = () => {
        if (gameMode === "local") {
            return (
                <>
                    <div className="userName">
                        <div className="userName-input-label">
                            {formatWording("general.opening.inputName.label", {})} <TiUserOutline style = {{transform: 'translateX(2px)', fontSize: "20px"}}/>
                        </div>
                        <input type="text"
                               className="userName-input"
                               value={userName}
                               onChange={(event) => setUserName(event.target.value)}
                               placeholder={formatWording("general.opening.inputName.placeHolder", {})} />
                    </div>
                </>
            );
        } else if (gameMode === "party") {
            return (
                <>
                    <div className="userName">
                        <div className="userName-input-label">
                            {formatWording("general.opening.inputName.label", {})} <TiUserOutline style = {{transform: 'translateX(2px)', fontSize: "20px"}}/>
                        </div>
                        <input type="text"
                               className="userName-input"
                               value={userName}
                               onChange={(event) => setUserName(event.target.value)}
                               placeholder={formatWording("general.opening.inputName.placeHolder", {})} />
                    </div>
                    <div className="roomID">
                        <div className="roomID-input-label">
                            {formatWording("general.opening.inputRoom.label", {})} <TiKeyOutline style = {{transform: 'translateX(2px)', fontSize: "20px"}}/>
                        </div>
                        <input type="text"
                               className="roomID-input"
                               value={id}
                               onKeyDown={(event) => {
                                   if (event.key === "Enter" && !checkInputs(id)) {
                                       noticeWording(formatWording("error.invalid.inputRoom", {}), 1500);
                                   }
                               }}
                               onChange={(event) => setId(event.target.value.slice(0, 9))}
                               placeholder={formatWording("general.opening.inputRoom.placeHolder", {})} />
                    </div>
                </>
            );
        }
    };


    return (
        <div className={"container-opening"}>
            <div className={"opening-page"}>
                {(gameMode !== "") && <div className={"goBack"} onClick={handleBackBtnClick}>
                    <GoArrowLeft style={{transform: 'translateX(0)', fontSize: "15px", color: "gray"}}/> {formatWording("general.goBack.menu", {})}
                </div>}
                <div className={"page-header"}>{formatWording("general.title", {})}</div>
                <div className={"page-content"}>
                    <div ref={localBtnRef} className={"start-local-btn"} onClick={handleLocalBtnClick}>
                        {formatWording("general.btn.localMode", {})} <VscDebugDisconnect style = {{transform: 'rotate(0deg) translateY(2px)', fontSize: "17px"}}/>
                    </div>
                    <div ref={partyBtnRef} className={"start-party-btn"} onClick={handlePartyBtnClick}>
                        {formatWording("general.btn.partyMode", {})} <FiLink style = {{transform: 'rotate(0deg) translateY(2px)', fontSize: "14px"}}/>
                    </div>
                    {(gameMode !== "") && <div className={"form"}>
                        {formSheet()}
                        <div className={"btn-block"}>
                            <div className={"back-btn"} onClick={handleBackBtnClick}>
                                <div className={"temp-container"}>
                                    <GoArrowLeft style = {{transform: 'translateX(-2px)', fontSize: "25px"}}/> {formatWording("general.btn.cancel", {})}
                                </div>
                            </div>
                            <div ref={confirmBtnRef} className={"confirm-btn"} onClick={handleConfirmBtnClick}>
                                <div className={"temp-container"}>
                                    {formatWording("general.btn.confirm", {})} <GoArrowRight style = {{transform: 'translateX(2px)', fontSize: "25px"}}/>
                                </div>
                            </div>
                        </div>
                        <div className="wording">{wording}</div>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default OpeningPageV2;