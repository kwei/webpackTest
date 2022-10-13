import React, { useEffect, useRef } from "react";
import { GrReturn } from "react-icons/gr";
import { random4Digits } from "../module/random4Digits";

import Record from "../component/Record.jsx";
import Alert from "../component/Alert.jsx";
import Notification from "../component/Notification.jsx";
import { setNumber } from "../redux/numberSlice";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { setTarget} from "../redux/targetSlice";
import { setNotice } from "../redux/noticeSlice";
import { resetRecord, setRecord } from "../redux/recordSlice";
import { changeAlertStatus, changeHighestScore, changeInputStatus, changeWinningStatus } from "../redux/statusSlice";
import { Storage } from "../module/storage";
import { setUser } from "../redux/userSlice";
const storage = Storage();


const MainPage = () => {
    const dispatch = useDispatch();
    const num = useSelector(state => state.num.num, shallowEqual);
    const target = useSelector(state => state.target.target, shallowEqual);
    const notice = useSelector(state => state.notice.notice, shallowEqual);
    const playerName = useSelector(state => state.user.user, shallowEqual);
    const {isAlertClosed, inputDisabled, highestScore} = useSelector(state => state.status, shallowEqual);
    const NUM_INPUT_PLACEHOLDER = "請輸入 4 個不重複的數字";
    const RULES = [
        "這是幾 A 幾 B 的小遊戲，請輸入 4 個不重複的數字，從 0 到 9。",
        "程式會自動產生隨機題目，若輸入的數字與題目相對應位置的數字相符，則會得到 A；",
        "若輸入的數字與題目不同位置的數字相符，則會得到 B。",
        "目標為獲得 4A。"
    ];
    const isMounted = useRef(false);
    const count = useRef(0);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
        } else {
            noticeWording("新的一局!", 1500);
            console.log(`target: ${target}`);
        }
    }, [target]);

    useEffect(() => {
        document.getElementById("overlay").style.display = isAlertClosed ? "none" : "block";
    }, [isAlertClosed]);

    useEffect(() => {
        newRound();
        const _playerName = storage.getStorage('playerName');
        if (!_playerName) {
            const name = window.prompt("請輸入您的遊玩名稱(預設：匿名玩家)", "匿名玩家");
            if (name === null || "") name = "匿名玩家";
            storage.setStorage('playerName', name);
            dispatch(setUser(name));
        } else dispatch(setUser(_playerName));
    }, []);

    const noticeWording = (str, timeout = 0) => {
        dispatch(setNotice(str));
        if (timeout) setTimeout(() => dispatch(setNotice('')), timeout);
    }

    const handleNumInput = (event) => {
        dispatch(setNumber(event.target.value.slice(0, 4)));
    };

    const resetStates = () => {
        dispatch(resetRecord());
        dispatch(setNotice(''));
        dispatch(setNumber(''));
        dispatch(changeInputStatus(false));
        dispatch(changeWinningStatus(false));
        dispatch(changeAlertStatus(true));
        count.current = 0;
    };

    const compareAnswer = () => {
        let a = 0, b = 0;
        new Promise((resolve) => {
            if ([...new Set(num)].length < 4) {
                noticeWording("請輸入 4 個'不重複'的數字", 1500);
            } else {
                count.current++;
                num.split('').map((digit, index) => {
                    if (digit === target[index]) {
                        a++;
                    } else if (target.includes(digit)) {
                        b++;
                    }
                });
                const _res = `${num.split('').join(' ')}:${a} A ${b} B`;
                dispatch(setRecord(_res));
                if (a === 4) {
                    noticeWording(`遊戲獲勝! 一共花了 ${count.current} 步。`);
                    dispatch(changeWinningStatus(true));
                    dispatch(changeAlertStatus(false));
                    dispatch(changeInputStatus(true));

                    const playingHistory = storage.getStorage('playingHistory');
                    if (playingHistory) storage.setStorage('playingHistory', playingHistory+count.current);
                    else storage.setStorage('playingHistory', count.current);

                    const currentHistory = storage.getStorage('playingHistory');
                    const highest = Math.min(...currentHistory.split('').map(str => Number(str))).toString();
                    dispatch(changeHighestScore(highest));
                }
            }
            resolve();
        }).then(() => dispatch(setNumber('')));
    };

    const newRound = () => {
        random4Digits((result) => {
            dispatch(setTarget(result));
        });
        resetStates();
    };

    return(
        <>
            <Notification/>
            <Alert
                msg={{
                    "header": "遊戲獲勝",
                    "content": `一共花了 ${count.current} 步。`
                }}
                bgColor="#f3ebb6"
                actionName="重新一局" action={() => newRound()}
            />
            <div className="rule-block">
                <span className="rules">
                    {RULES.map((rule, index) => {
                        return (<span key={index}>{rule}</span>);
                    })}
                </span>
            </div>
            <div className="input-block">
                <input type="number"
                       value={num}
                       disabled={inputDisabled}
                       onChange={handleNumInput}
                       onKeyUp={(event) => {
                           if (event.key === 'Enter') compareAnswer();
                       }}
                       placeholder={NUM_INPUT_PLACEHOLDER} />
                <i className="enter" onClick={() => compareAnswer()}><GrReturn/></i>
            </div>
            <div className="currentHighestScore">
                {playerName+"，您目前最快步數："+highestScore}
                <a className="clearStorage" onClick={() => {
                    if (window.confirm('確定要清除遊玩紀錄?')) {
                        storage.removeStorage("playingHistory");
                        dispatch(changeAlertStatus(true));
                    }
                }}>清除紀錄</a>
            </div>
            <div className="button-area">
                <button onClick={() => newRound()} id="Generate" >重新開始</button>
            </div>
            <div className="notice-block">{notice}</div>
            <div className="record-block"><Record/></div>
        </>
    );
};

export default React.memo(MainPage);