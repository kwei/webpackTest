import '../../css/main.scss';
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { GrReturn } from "react-icons/gr";

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
import { env } from '../../../env.js';
import { formatWording } from "../../../utils/langUtils";

const storage = Storage();
const logger = Logger({className: "MainPage"});

const NUM_INPUT_PLACEHOLDER = formatWording("general.local.inputNumber.placeHolder", {});
const RULES = env.GAME.RULE;

const { initTarget, initRecord, initStep, initIsWinning, initPlayingHistory, initHighestScore, initAverageScore } = storage.loadAll({
    initTarget: shuffleArray(env.GAME.NUMBER_RANGE).slice(0, 4).join(''),
    initRecord: [],
    initStep: 0,
    initIsWinning: false,
    initPlayingHistory: "",
    initHighestScore: formatWording("general.default.score", {}),
    initAverageScore: 0
});

logger.verbose(`Init target         : ${initTarget}`);
logger.verbose(`Init record         : ${initRecord}`);
logger.verbose(`Init count          : ${initStep}`);
logger.verbose(`Init isWin          : ${initIsWinning}`);
logger.verbose(`Init highestScore   : ${initHighestScore}`);
logger.verbose(`Init playingHistory : ${initPlayingHistory}`);
logger.verbose(`Init averageScore   : ${initAverageScore}`);

const MainPage = () => {
    const dispatch = useDispatch();

    const [notice, setNotice] = useState("");
    const [num, setNum] = useState("");
    const [isAlertVisible, setAlertVisible] = useState(false);
    const [inputEditable, setInputEditable] = useState(!initIsWinning);
    const [isWin, setIsWin] = useState(initIsWinning);
    const [target, setTarget] = useState(initTarget);
    const [record, setRecord] = useState(initRecord);
    const [highestScore, setHighestScore] = useState(initHighestScore);
    const [playingHistory, setPlayingHistory] = useState(initPlayingHistory);
    const [averageScore, setAverageScore] = useState(initAverageScore);

    const count = useRef(initStep);
    const isMounted = useRef(false);
    const inputRef = useRef(null);
    let overlayRef = useRef(null);

    useEffect(() => {
        if (isMounted.current) {
            resetStates();
            noticeWording(formatWording("general.newRound", {}), 1500);
            logger.verbose(`New target number: ${target}`);
            storage.saveAll({
                currentTarget: target,
                currentRecord: [],
                currentStep: 0,
                currentIsWinning: false,
                currentPlayingHistory: playingHistory,
                currentHighestScore: highestScore,
                currentAverageScore: averageScore
            });
        }
    }, [target]);

    useEffect(() => {
        if (isMounted.current) {
            overlayRef.current.style.display = isAlertVisible ? "block" : "none";
        }
    }, [isAlertVisible]);

    useEffect(() => {
        if (isMounted.current && isWin) {
            setInputEditable(false);
            setAlertVisible(true);
            dispatch(setWinningStep(count.current));

            let currentPlayingHistory = count.current;
            if (playingHistory !== "") currentPlayingHistory = playingHistory+","+count.current
            setPlayingHistory(currentPlayingHistory);

            let currentHighestScore = highestScore;
            if (highestScore === formatWording("general.default.score", {}) || count.current < Number(highestScore)) currentHighestScore = count.current;
            setHighestScore(currentHighestScore);

            let avg;
            const temp = playingHistory.split(",");
            if (temp.length > 0) avg = (temp.map(str => Number(str)).reduce((partialSum, a) => partialSum + a, 0) + count.current) / (temp.length+1);
            else avg = count.current;
            avg = Math.round(avg);
            setAverageScore(avg);

            storage.saveAll({
                currentTarget: target,
                currentRecord: record.join(","),
                currentStep: count.current,
                currentIsWinning: isWin,
                currentPlayingHistory: currentPlayingHistory,
                currentHighestScore: currentHighestScore,
                currentAverageScore: avg
            });
        }
    }, [isWin]);

    useEffect(() => {isMounted.current = true}, []);

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
        if (isWin) return;
        logger.info("Compare answer");
        if (!checkInputs(num) || [...new Set(num)].length < 4) {
            logger.info("Invalid input");
            noticeWording(formatWording("error.invalid.inputNumber", {}), 1500);
        } else {
            count.current++;
            const {a, b} = calculateAB(num);
            const _res = `${num.split('').join(' ')}:${a} A ${b} B`;
            setRecord([...record, _res]);
            logger.verbose(`Current result ${_res}`);

            storage.saveAll({
                currentTarget: target,
                currentRecord: [...record, _res].join(","),
                currentStep: count.current,
                isWinning: isWin ,
                currentPlayingHistory: playingHistory,
                currentHighestScore: highestScore,
                currentAverageScore: averageScore
            });
            if (a === 4) {
                logger.info("Winning");
                noticeWording(formatWording("alert.local.win", {count: count.current}));
                setIsWin(true);
            }
        }
        setNum("");
        inputRef.current.focus();
    };

    const handleOverlayClick = () => {
        setAlertVisible(false);
    }

    const newRound = useCallback(() => {
        logger.info("New round");
        setTarget(shuffleArray(env.GAME.NUMBER_RANGE).slice(0, 4).join(''));
    }, []);

    return(
        <div className="container-main">
            <div ref={overlayRef} id="overlay" onClick={handleOverlayClick}>
                { isWin && <Alert action={() => newRound()} isAlertVisible={isAlertVisible}/> }
            </div>
            <div className="rule-block"><InfoBlock text={RULES}/></div>
            <div className="input-block">
                <input type="number"
                       ref={inputRef}
                       value={num}
                       disabled={!inputEditable}
                       onChange={handleNumInput}
                       onKeyUp={(event) => {
                           if (event.key === 'Enter') compareAnswer();
                       }}
                       placeholder={NUM_INPUT_PLACEHOLDER} />
                <i className="enter" onClick={compareAnswer}><GrReturn/></i>
            </div>
            <div className="currentHighestScore">
                { formatWording("general.local.step", {count: highestScore, avg: averageScore? averageScore: formatWording("general.default.score", {})}) }
                <a className="clearStorage" onClick={() => {
                    if (window.confirm(formatWording("alert.local.clean.playingHistory", {}))) {
                        logger.info("Remove playing record");
                        storage.setStorage(env.LOCAL.STORAGE.PLAYING_HISTORY, "");
                        storage.setStorage(env.LOCAL.STORAGE.CURRENT_HIGHEST_SCORE, formatWording("general.default.score", {}));
                        storage.setStorage(env.LOCAL.STORAGE.AVERAGE_SCORE, 0);
                        setHighestScore(formatWording("general.default.score", {}));
                        setPlayingHistory("");
                        setAverageScore(0);
                    }
                }}>{formatWording("general.clean.playingHistory", {})}</a>
            </div>
            <div className="button-area"><RestartBtn onClick={() => newRound()} value={formatWording("general.restart", {})}/></div>
            <div className="notice-block"><Notice text={notice}/></div>
            <div className="record-block"><Record record={record}/></div>
        </div>
    );
};

export default React.memo(MainPage);