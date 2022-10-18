import React, {useEffect, useRef, useState} from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { GrReturn } from "react-icons/gr";

/***
 * https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52/
 * Use React.lazy() to dynamically import components;
 * Use <Suspense/> to handle the fallback, such as a loading component;
 * Use <ErrorBoundary> to handle error rendering React.lazy() component.
 ***/
const Record = React.lazy(() => import("../component/Record/Record.jsx"));
const Alert = React.lazy(() => import("../component/Alert/Alert.jsx"));
const Player = React.lazy(() => import("../component/Player/Player.jsx"));
const Notification = React.lazy(() => import("../component/Notification/Notification.jsx"));

import { resetRecord, setRecord, setHighestScore, resetHighestScore } from "../component/Record/recordSlice";
import { setAlertVisible } from "../component/Alert/alertSlice";
import { initUser } from "../component/Player/userSlice";

import { Storage } from "../module/storage";
import { Logger } from "../module/logger";
import { eventEmitter } from "../module/eventEmitter";
import { askPlayerName } from "../module/askPlayerName";
import {shuffleArray} from "../module/shuffleArray";

const storage = Storage();
const logger = Logger({className: "main"});

const NUM_INPUT_PLACEHOLDER = "請輸入 4 個不重複的數字";
const RULES = [
    "這是幾 A 幾 B 的小遊戲，請輸入 4 個不重複的數字，從 0 到 9。",
    "程式會自動產生隨機題目，若輸入的數字與題目相對應位置的數字相符，則會得到 A；",
    "若輸入的數字與題目不同位置的數字相符，則會得到 B。",
    "目標為獲得 4A。"
];

const baseNumbers = [...Array(10).keys()];
const initTarget = shuffleArray(baseNumbers).slice(0, 4).join('');
logger.verbose(`Init target number: ${initTarget}`);

const MainPage = () => {
    const dispatch = useDispatch();

    const [notice, setNotice] = useState("");
    const [num, setNum] = useState("");
    const [isWin, setIsWin] = useState(false);
    const [inputEditable, setInputEditable] = useState(true);
    const [target, setTarget] = useState(initTarget);
    const highestScore = useSelector(state => state.recordReducer.highestScore, shallowEqual);
    const isAlertVisible = useSelector(state => state.alertReducer.isAlertVisible, shallowEqual);
    const count = useRef(0);
    const isMounted = useRef(false);
    let overlayRef = useRef(null);

    useEffect(() => {
        logger.info("Initialize player's name");
        dispatch(initUser());
    }, []);

    useEffect(() => {
        if (isMounted.current) {
            resetStates()
            noticeWording("新的一局!", 1500);
            logger.verbose(`New target number: ${target}`);
        }
        isMounted.current = true;
    }, [target]);

    useEffect(() => {
        overlayRef.current.style.display = isAlertVisible ? "block" : "none";
    }, [isAlertVisible]);

    const noticeWording = (str, timeout = 0) => {
        logger.info(`Notice: ${str}`);
        setNotice(str);
        if (timeout) setTimeout(() => setNotice(''), timeout);
    }

    const handleNumInput = (event) => {
        setNumber(event.target.value.slice(0, 4));
    };

    const resetStates = () => {
        logger.info("Reset states");
        setNotice("");
        setNum("");
        setInputEditable(true);
        setIsWin(false);
        dispatch(resetRecord());
        dispatch(setAlertVisible(false));
        count.current = 0;
    };

    const checkInputs = () => {
        let isValid = true;
        if ([...new Set(num)].length < 4) {
            isValid = false;
        } else {
            num.split('').map(value => {
                if (value.charCodeAt(0) < 48 || value.charCodeAt(0) > 57) isValid = false;
            });
        }
        return isValid;
    };

    const compareAnswer = () => {
        logger.info("Compare answer");
        let a = 0, b = 0;
        new Promise((resolve) => {
            if (!checkInputs()) {
                logger.info("Invalid input");
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
                logger.verbose(`Current result ${_res}`);
                if (a === 4) {
                    logger.info("Winning");
                    noticeWording(`遊戲獲勝! 一共花了 ${count.current} 步。`);
                    setIsWin(true);
                    setInputEditable(false);
                    dispatch(setAlertVisible(true));

                    const playingHistory = storage.getStorage('playingHistory');
                    if (playingHistory) storage.setStorage('playingHistory', playingHistory+count.current);
                    else storage.setStorage('playingHistory', count.current);

                    const currentHistory = storage.getStorage('playingHistory');
                    const highest = Math.min(...currentHistory.split('').map(str => Number(str))).toString();
                    dispatch(setHighestScore(highest));
                }
            }
            resolve();
        }).then(() => {
            setNumber("");
        });
    };

    const newRound = () => {
        logger.info("New round");
        setTarget(shuffleArray(baseNumbers).slice(0, 4).join(''));
    };

    return(
        <>
            <Notification/>
            <div ref={overlayRef} id="overlay">
                <Alert
                    isWin={isWin}
                    msg={{
                        "header": "遊戲獲勝",
                        "content": `一共花了 ${count.current} 步。`
                    }}
                    bgColor="#f3ebb6"
                    actionName="重新一局" action={() => newRound()}
                />
            </div>
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
                       disabled={!inputEditable}
                       onChange={handleNumInput}
                       onKeyUp={(event) => {
                           if (event.key === 'Enter') compareAnswer();
                       }}
                       placeholder={NUM_INPUT_PLACEHOLDER} />
                <i className="enter" onClick={() => compareAnswer()}><GrReturn/></i>
            </div>
            <div className="currentHighestScore">
                <Player/> {"，您目前最快步數：" + highestScore }
                <a className="clearStorage" onClick={() => {
                    if (window.confirm('確定要清除遊玩紀錄?')) {
                        logger.info("Remove playing record");
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