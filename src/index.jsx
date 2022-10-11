import './css/style.scss';
import React, {useEffect, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import classNames from "classnames";

const render = createRoot(document.getElementById('root'));

const baseNumbers = [...Array(10).keys()];

const shuffleArray = (array) => {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
};

const App = () => {
    const [num, setNum] = useState('');
    const [target, setTarget] = useState('');
    const [notice, setNotice] = useState('');
    const [record, setRecord] = useState([]);
    const [isWin, setIsWin] = useState(false);
    const [isAlertClosed, setAlertClosed] = useState(false);
    const [inputDisabled, setInputDisabled] = useState(true);
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
        random4Digits();
    }, []);

    const noticeWording = (str, timeout = 0) => {
        setNotice(str);
        if (timeout) setTimeout(() => setNotice(""), timeout);
    }

    const handleNumInput = (event) => {
        setNum(event.target.value.slice(0, 4));
    };

    const random4Digits = () => {
        const randomBaseNumbers = shuffleArray(baseNumbers);
        setTarget(randomBaseNumbers.slice(0, 4).join(''));
        setRecord([]);
        setNotice('');
        setNum('');
        setInputDisabled(false);
        setIsWin(false);
        setAlertClosed(true);
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
                setRecord([...record, _res]);
                if (a === 4) {
                    noticeWording("Win!");
                    setIsWin(true);
                    setAlertClosed(false);
                    setInputDisabled(true);
                }
            }
            resolve();
        }).then(() => setNum(''));
    };

    const RenderRecord = () => {
        return (
            <ul className="ul-no-bullet">
                {record.length > 0 &&
                    record.map((item, index) => {
                        return (
                            <li key={index} className="record-item">
                                <div className="item">
                                    <div className="record-item-input">{item.split(":")[0]}</div>
                                    <i className="record-item-arrow"></i>
                                    <div className="record-item-result">{item.split(":")[1]}</div>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        );
    };

    const MiddleAlert = (props) => {
        const data = props.data;
        const alertBlockRef = useRef(null);
        if (!isWin) return null;

        useEffect(() => {
            document.addEventListener("mousedown", (event) => {
                if (alertBlockRef.current && !alertBlockRef.current.contains(event.target)) setAlertClosed(true);
            });
        }, [alertBlockRef]);

        return (
            <div className={classNames("alert-block", {"close": isAlertClosed})} ref={ref => alertBlockRef.current = ref}>
                <div className="alert-header">{data.header}</div>
                <div className="alert-content">{data.content}</div>
                <div className="alert-footer">
                    <button className="next-round-btn" value="Next Round" onClick={random4Digits}>Next Round</button>
                </div>
            </div>
        );
    };

    return (
        <div className={classNames("container")}>
            <div id="overlay">
                <div className="modal-alert">
                    <MiddleAlert data={
                        {
                            "header": "Game Information",
                            "content": "Win!"
                        }
                    }/>
                </div>
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
            <div className="button-area">
                <button onClick={random4Digits} id="Generate" >Restart</button>
            </div>
            <div className="notice-block">{notice}</div>
            <div className="record-block"><RenderRecord/></div>
        </div>
    );
}

render.render(<App />);