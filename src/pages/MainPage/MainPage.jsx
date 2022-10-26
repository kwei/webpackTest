import '../../css/main.scss';
import React, {useCallback, useEffect, useRef, useState} from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { GrReturn } from "react-icons/gr";

import { setHighestScore, resetHighestScore } from "../../component/Record/recordSlice";
import { setWinningStep } from "../../component/Alert/alertSlice";

import Record from "../../component/Record/Record.jsx";
import Notice from "../../component/Notice/Notice.jsx";
import InfoBlock from "../../component/InfoBlock/InfoBlock.jsx";
import Alert from "../../component/Alert/Alert.jsx";
import RestartBtn from "../../component/Button/RestartBtn.jsx";

import { Storage } from "../../module/storage";
import { Logger } from "../../module/logger";
import { shuffleArray } from "../../module/shuffleArray";
import { checkInputs } from "../../module/checkInputs";

const storage = Storage();
const logger = Logger({className: "MainPage"});

const NUM_INPUT_PLACEHOLDER = "請輸入 4 個不重複的數字";
const RULES = [
    "這是幾 A 幾 B 的小遊戲，請輸入 4 個不重複的數字，從 0 到 9。",
    "程式會自動產生隨機題目，若輸入的數字與題目相對應位置的數字相符，則會得到 A；",
    "若輸入的數字與題目不同位置的數字相符，則會得到 B。",
    "目標為獲得 4A。"
];

const baseNumbers = [...Array(10).keys()];
let initTarget = null, initRecord = [];
const currentTarget = storage.getStorage('currentTarget');
if (currentTarget) initTarget = currentTarget;
else initTarget = shuffleArray(baseNumbers).slice(0, 4).join('');
logger.verbose(`Init target number: ${initTarget}`);
const currentRecord = storage.getStorage('currentRecord');
if (currentRecord) initRecord = currentRecord.split(",");
logger.verbose(`Init record: ${initRecord}`);

const MainPage = () => {
    const dispatch = useDispatch();

    const [notice, setNotice] = useState("");
    const [num, setNum] = useState("");
    const [isWin, setIsWin] = useState(false);
    const [isAlertVisible, setAlertVisible] = useState(false);
    const [inputEditable, setInputEditable] = useState(true);
    const [target, setTarget] = useState(initTarget);
    const [record, setRecord] = useState(initRecord);

    const highestScore = useSelector(state => state.recordReducer.highestScore, shallowEqual);

    const count = useRef(0);
    const isMounted = useRef(false);
    let overlayRef = useRef(null);

    useEffect(() => {
        if (isMounted.current) {
            resetStates()
            noticeWording("新的一局!", 1500);
            logger.verbose(`New target number: ${target}`);
            storage.setStorage('currentTarget', target);
        }
        isMounted.current = true;
    }, [target]);

    useEffect(() => {
        if (isMounted.current) {
            overlayRef.current.style.display = isAlertVisible ? "block" : "none";
        }
        isMounted.current = true;
    }, [isAlertVisible]);

    useEffect(() => {
        if (isWin) {
            setInputEditable(false);
            setAlertVisible(true);
            dispatch(setWinningStep(count.current));

            const playingHistory = storage.getStorage('playingHistory');
            if (playingHistory) storage.setStorage('playingHistory', playingHistory+","+count.current);
            else storage.setStorage('playingHistory', count.current);

            const currentHistory = storage.getStorage('playingHistory').split(',').map(str => Number(str));
            if (currentHistory.length !== 0) dispatch(setHighestScore(Math.min(...currentHistory).toString()));
        }
    }, [isWin]);

    const noticeWording = (str, timeout = 0) => {
        logger.info(`Notice: ${str}`);
        setNotice(str);
        if (timeout) setTimeout(() => setNotice(''), timeout);
    };

    const handleNumInput = (event) => {
        setNum(event.target.value.slice(0, 4));
    };

    const resetStates = () => {
        logger.info("Reset states");
        setNotice("");
        setNum("");
        setInputEditable(true);
        setIsWin(false);
        setRecord([]);
        setAlertVisible(false);
        count.current = 0;
        storage.removeStorage('currentRecord');
        storage.removeStorage('currentTarget');
    };

    const saveCurrentRecord = (record) => {
        const currentRecord = storage.getStorage('currentRecord');
        if (currentRecord) storage.setStorage('currentRecord', currentRecord+","+record);
        else storage.setStorage('currentRecord', record);
    };

    const calculateAB = (num) => {
        let a = 0, b = 0;
        num.split('').map((digit, index) => {
            if (digit === target[index]) {
                a++;
            } else if (target.includes(digit)) {
                b++;
            }
        });
        return {a, b};
    };

    const compareAnswer = () => {
        logger.info("Compare answer");
        if (!checkInputs(num)) {
            logger.info("Invalid input");
            noticeWording("請輸入 4 個'不重複'的數字", 1500);
        } else {
            count.current++;
            const {a, b} = calculateAB(num);
            const _res = `${num.split('').join(' ')}:${a} A ${b} B`;
            setRecord([...record, _res]);
            logger.verbose(`Current result ${_res}`);
            saveCurrentRecord(_res);
            if (a === 4) {
                logger.info("Winning");
                noticeWording(`遊戲獲勝! 一共花了 ${count.current} 步。`);
                setIsWin(true);
            }
        }
        setNum("");
    };

    const handleOverlayClick = () => {
        setAlertVisible(false);
    }

    const newRound = useCallback(() => {
        logger.info("New round");
        setTarget(shuffleArray(baseNumbers).slice(0, 4).join(''));
    }, []);

    return(
        <div className="container-main">
            <div ref={overlayRef} id="overlay" onClick={handleOverlayClick}>
                { isWin && <Alert action={() => newRound()} isAlertVisible={isAlertVisible}/> }
            </div>
            <div className="rule-block"><InfoBlock text={RULES}/></div>
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
                {"您目前最快步數：" + highestScore }
                <a className="clearStorage" onClick={() => {
                    if (window.confirm('確定要清除遊玩紀錄?')) {
                        logger.info("Remove playing record");
                        storage.removeStorage("playingHistory");
                        dispatch(resetHighestScore(undefined));
                    }
                }}>清除紀錄</a>
            </div>
            <div className="button-area"><RestartBtn onClick={() => newRound()} value={"重新開始"}/></div>
            <div className="notice-block"><Notice text={notice}/></div>
            <div className="record-block"><Record record={record}/></div>
        </div>
    );
};

export default React.memo(MainPage);