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
import {changeAlertStatus, changeInputStatus, changeWinningStatus} from "../redux/statusReducer";

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
    const {isAlertClosed, inputDisabled} = useSelector(state => state.status, shallowEqual);
    const NUM_INPUT_PLACEHOLDER = "4 different numbers";
    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
        } else {
            noticeWording("New round!", 1500);
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
        if (timeout) setTimeout(() => store.dispatch(setNotice(str)), timeout);
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
    };

    const compareAnswer = () => {
        let a = 0, b = 0;
        new Promise((resolve) => {
            if ([...new Set(num)].length < 4) {
                noticeWording("4 'different' number", 1500);
            } else {
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
                    noticeWording("Win!");
                    store.dispatch(changeWinningStatus(true));
                    store.dispatch(changeAlertStatus(false));
                    store.dispatch(changeInputStatus(true));
                }
            }
            resolve();
        }).then(() => store.dispatch(setNumber('')));
    };


    return(
        <>
            <Alert resetStates={resetStates}/>
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
            <div className="button-area">
                <button onClick={() => {
                    random4Digits((result) => {
                        store.dispatch(setTarget(result));
                    });
                    resetStates();
                }} id="Generate" >Restart</button>
            </div>
            <div className="notice-block">{notice}</div>
            <div className="record-block"><Record/></div>
        </>
    );
};

export default MainPage;