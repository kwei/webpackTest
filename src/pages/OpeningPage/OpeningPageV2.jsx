import '../../css/opening_v2.scss';
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

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
const logger = Logger({className: "OpeningPage"});

const NAME_INPUT_PLACEHOLDER = "請輸入欲顯示之名稱";
const ROOM_INPUT_PLACEHOLDER = "請輸入派對房間代碼";

const OpeningPageV2 = () => {
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
            let _name = "匿名玩家";
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
            Storage.setStorage(env.LOCAL.STORAGE.PLAYER_NAME, _name);
            Storage.setStorage(env.LOCAL.STORAGE.ROOM_ID, id);
            enterRoom("/"+gameMode);
        } else {
            noticeWording("只能輸入數字", 1500);
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
                        <div className="userName-input-label">名稱 <TiUserOutline style = {{transform: 'translateX(2px)', fontSize: "20px"}}/></div>
                        <input type="text"
                               className="userName-input"
                               value={userName}
                               onChange={(event) => setUserName(event.target.value)}
                               placeholder={NAME_INPUT_PLACEHOLDER} />
                    </div>
                </>
            );
        } else if (gameMode === "party") {
            return (
                <>
                    <div className="userName">
                        <div className="userName-input-label">名稱 <TiUserOutline style = {{transform: 'translateX(2px)', fontSize: "20px"}}/></div>
                        <input type="text"
                               className="userName-input"
                               value={userName}
                               onChange={(event) => setUserName(event.target.value)}
                               placeholder={NAME_INPUT_PLACEHOLDER} />
                    </div>
                    <div className="roomID">
                        <div className="roomID-input-label">代碼 <TiKeyOutline style = {{transform: 'translateX(2px)', fontSize: "20px"}}/></div>
                        <input type="text"
                               className="roomID-input"
                               value={id}
                               onKeyDown={(event) => {
                                   if (event.key === "Enter" && !checkInputs(id)) {
                                       noticeWording("只能輸入數字", 1500);
                                   }
                               }}
                               onChange={(event) => setId(event.target.value.slice(0, 9))}
                               placeholder={ROOM_INPUT_PLACEHOLDER} />
                    </div>
                </>
            );
        }
    };


    return (
        <div className={"container-opening"}>
            <div className={"opening-page"}>
                {(gameMode !== "") && <div className={"goBack"} onClick={handleBackBtnClick}>
                    <GoArrowLeft style={{transform: 'translateX(0)', fontSize: "15px", color: "gray"}}/> 回到選單
                </div>}
                <div className={"page-header"}>幾 A 幾 B</div>
                <div className={"page-content"}>
                    <div ref={localBtnRef} className={"start-local-btn"} onClick={handleLocalBtnClick}>
                        離線模式 <VscDebugDisconnect style = {{transform: 'rotate(0deg) translateY(2px)', fontSize: "17px"}}/>
                    </div>
                    <div ref={partyBtnRef} className={"start-party-btn"} onClick={handlePartyBtnClick}>
                        派對模式 <FiLink style = {{transform: 'rotate(0deg) translateY(2px)', fontSize: "14px"}}/>
                    </div>
                    {(gameMode !== "") && <div className={"form"}>
                        {formSheet()}
                        <div className={"btn-block"}>
                            <div className={"back-btn"} onClick={handleBackBtnClick}>
                                <div className={"temp-container"}>
                                    <GoArrowLeft style = {{transform: 'translateX(-2px)', fontSize: "25px"}}/> 取消
                                </div>
                            </div>
                            <div ref={confirmBtnRef} className={"confirm-btn"} onClick={handleConfirmBtnClick}>
                                <div className={"temp-container"}>
                                    確認 <GoArrowRight style = {{transform: 'translateX(2px)', fontSize: "25px"}}/>
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