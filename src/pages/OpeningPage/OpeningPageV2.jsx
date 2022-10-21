import '../../css/opening_v2.scss';
import React, { useRef, useState } from "react";
import { Logger } from "../../module/logger";
import { switchPage } from "./openingPageSlice";
import { FaMousePointer } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch } from "react-redux";
import { checkInputs } from "../../module/checkInputs";
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
        enterRoom("/"+gameMode);
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
                    離線模式為個人遊玩模式，目標在於追求高分並嘗試超越自己。
                </>
            );
        } else if (gameMode === "party") {
            return (
                <>
                    <div className="userName">
                        <div className="userName-input-label">名稱</div>
                        <input type="text"
                               className="userName-input"
                               value={userName}
                               onChange={(event) => setUserName(event.target.value)}
                               placeholder={NAME_INPUT_PLACEHOLDER} />
                    </div>
                    <div className="roomID">
                        <div className="roomID-input-label">代碼</div>
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
        <div className={"container"}>
            <div className={"opening-page"}>
                <div className={"page-header"}>Bulls and Cows (1A2B)</div>
                <div className={"page-content"}>
                    <div ref={localBtnRef} className={"start-local-btn"} onClick={handleLocalBtnClick}>
                        離線模式 <FaMousePointer style = {{transform: 'rotate(-30deg)'}}/>
                    </div>
                    <div ref={partyBtnRef} className={"start-party-btn"} onClick={handlePartyBtnClick}>
                        派對模式 <FaMousePointer style = {{transform: 'rotate(-30deg)'}}/>
                    </div>
                    {(gameMode !== "") && <div className={"form"}>
                        {formSheet()}
                        <div className={"btn-block"}>
                            <div className={"back-btn"} onClick={handleBackBtnClick}>
                                <IoIosArrowForward style = {{transform: 'translateY(2px)'}}/> 返回 <IoIosArrowBack style = {{transform: 'translateY(2px)'}}/>
                            </div>
                            <div ref={confirmBtnRef} className={"confirm-btn"} onClick={handleConfirmBtnClick}>
                                <IoIosArrowForward style = {{transform: 'translateY(2px)'}}/> 確認 <IoIosArrowBack style = {{transform: 'translateY(2px)'}}/>
                            </div>
                        </div>
                        <div className="wording">{wording}</div>
                    </div>}
                </div>
                <div className={"page-footer"}></div>
            </div>
        </div>
    );
};

export default OpeningPageV2;