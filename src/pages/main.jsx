import React, {useEffect, useRef} from "react";

import {random4Digits} from "../module/random4Digits";

import Record from "../component/Record.jsx";
import Alert from "../component/Alert.jsx";
import {setNumber} from "../redux/numReducer";
import store from "../redux/store";
import {shallowEqual, useSelector} from "react-redux";
import {setTarget} from "../redux/targetReducer";
import {setNotice} from "../redux/noticeReducer";
import {resetRecord, setRecord} from "../redux/recordReducer";
import {changeAlertStatus, changeHighestScore, changeInputStatus, changeWinningStatus} from "../redux/statusReducer";
import {Storage} from "../module/storage";
const storage = Storage();
/***
 * template: state = {
 *     num,
 *     target,
 *     notice,
 *     record,
 *     status = {
 *         isWin,
 *         isAlertClosed,
 *         inputDisabled,
 *         isMounted
 *     }
 * };
 ***/


const MainPage = () => {
    const num = useSelector(state => state.num.num, shallowEqual);
    const target = useSelector(state => state.target.target, shallowEqual);
    const notice = useSelector(state => state.notice.notice, shallowEqual);
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
        random4Digits((result) => {
            store.dispatch(setTarget(result));
        });
        resetStates();
    }, []);

    const noticeWording = (str, timeout = 0) => {
        store.dispatch(setNotice(str));
        if (timeout) setTimeout(() => store.dispatch(setNotice('')), timeout);
    }

    const handleNumInput = (event) => {
        store.dispatch(setNumber(event.target.value.slice(0, 4)));
    };

    const resetStates = () => {
        store.dispatch(resetRecord());
        store.dispatch(setNotice(''));
        store.dispatch(setNumber(''));
        store.dispatch(changeInputStatus(false));
        store.dispatch(changeWinningStatus(false));
        store.dispatch(changeAlertStatus(true));
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
                store.dispatch(setRecord(_res));
                if (a === 4) {
                    noticeWording(`遊戲獲勝! 一共花了 ${count.current} 步。`);
                    store.dispatch(changeWinningStatus(true));
                    store.dispatch(changeAlertStatus(false));
                    store.dispatch(changeInputStatus(true));

                    const playingHistory = storage.getStorage('playingHistory');
                    if (playingHistory) storage.setStorage('playingHistory', playingHistory+count.current);
                    else storage.setStorage('playingHistory', count.current);

                    const currentHistory = storage.getStorage('playingHistory');
                    const highest = Math.min(...currentHistory.split('').map(str => Number(str))).toString();
                    store.dispatch(changeHighestScore(highest));
                }
            }
            resolve();
        }).then(() => store.dispatch(setNumber('')));
    };


    return(
        <>
            <Alert resetStates={resetStates} msg={{
                "header": "遊戲獲勝",
                "content": `一共花了 ${count.current} 步。`
            }}/>
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
            </div>
            <div className="currentHighestScore">
                {"目前最快步數："+highestScore}
                <a className="clearStorage" onClick={() => {
                    storage.removeStorage("playingHistory");
                }}>清除紀錄</a>
            </div>
            <div className="button-area">
                <button onClick={() => {
                    random4Digits((result) => {
                        store.dispatch(setTarget(result));
                    });
                    resetStates();
                }} id="Generate" >重新開始</button>
            </div>
            <div className="notice-block">{notice}</div>
            <div className="record-block"><Record/></div>
        </>
    );
};

export default MainPage;