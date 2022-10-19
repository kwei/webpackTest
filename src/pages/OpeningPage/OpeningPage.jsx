import '../../css/opening.scss';
import React, { useState } from "react";
import { Logger } from "../../module/logger";
import { switchPage } from "./openingPageSlice";
import { setUser } from "../../component/Player/userSlice";
import { setRoom } from "../PartyPage/partyPageSlice";
import { useDispatch } from "react-redux";

const logger = Logger({className: "OpeningPage"});

const NAME_INPUT_PLACEHOLDER = "請輸入欲顯示之名稱";
const ROOM_INPUT_PLACEHOLDER = "請輸入派對房間代碼";

const OpeningPage = () => {

    const dispatch = useDispatch();
    const [userName, setUserName] = useState("");
    const [id, setId] = useState("");
    const [wording, setWording] = useState("");

    const checkInputs = () => {
        let isValid = true;
        id.split('').map(value => {
            logger.debug(`checkInputs value = ${value}`);
            if (value.charCodeAt(0) < 48 || value.charCodeAt(0) > 57) isValid = false;
        });
        return isValid;
    };

    const enterRoom = (type) => dispatch(switchPage(type));

    return (
        <div className="opening-page">
            <div className="user-info-input">
                <div className="start-local">
                    <div className="start-local-btn" onClick={() => enterRoom("/local")}>本地遊玩</div>
                </div>
                <div className="start-party">
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
                        <input type="number"
                               className="roomID-input"
                               value={id}
                               onKeyDown={(event) => {
                                   if (event.key === "Enter" && !checkInputs()) {
                                       setWording("只能輸入數字");
                                       setId("");
                                   }
                               }}
                               onChange={(event) => setId(event.target.value.slice(0, 9))}
                               placeholder={ROOM_INPUT_PLACEHOLDER} />
                    </div>
                    <div className="wording">{wording}</div>
                    <div className="start-party-btn"
                         onClick={() => {
                             if (checkInputs()) {
                                 dispatch(setUser(userName));
                                 dispatch(setRoom(id));
                                 enterRoom("/party");
                             } else {
                                 setWording("只能輸入數字");
                             }
                         }}>
                        加入派對
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OpeningPage;