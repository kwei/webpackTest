import './css/style.scss';
import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';

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
    const [result, setResult] = useState('');
    const [notice, setNotice] = useState('');
    const [record, setRecord] = useState([]);
    const [A, setA] = useState(0);
    const [B, setB] = useState(0);
    const NUM_INPUT_PLACEHOLDER = "4 different numbers";

    useEffect(() => {
        console.log(`component did mount`);
        random4Digits();
    }, []);

    useEffect(() => {
        console.log(`target update`);
        noticeWording("題目已更新", 1500);
        console.log(`target: ${target}`);
    }, [target]);

    useEffect(() => {
        console.log(`A B update`);
        setResult(`${A} A - ${B} B`);
        console.log(`store `, result);
        setRecord([...record, result]);
    }, [A, B]);

    const noticeWording = (str, timeout) => {
        setNotice(str);
        setTimeout(() => setNotice(""), timeout);
    }

    const handleNumInput = (event) => {
        setNum(event.target.value.slice(0, 4));
    };

    const random4Digits = () => {
        const randomBaseNumbers = shuffleArray(baseNumbers);
        setTarget(randomBaseNumbers.slice(0, 4).join(''));
    };

    const compareAnswer = () => {
        let a = 0, b = 0;
        const uniqueArray = [...new Set(num)];
        new Promise((resolve) => {
            if (uniqueArray.length < 4) {
                noticeWording("4 'different' number", 1500);
            } else {
                num.split('').map((digit, index) => {
                    if (digit === target[index]) {
                        a++;
                    } else if (target.includes(digit)) {
                        b++;
                    }
                });
                setA(a);
                setB(b);
            }
            resolve();
        }).then(() => setNum(''));
    };

    const RenderRecord = () => {
        console.log("record: ", record);
        return (
            <ul>
                {record.length > 0 &&
                    record.map((item, index) => {
                        console.log(item, index);
                        return (
                            <li key={index}>
                                item
                            </li>
                        );
                    })
                }
            </ul>
        );
    };

    return (
        <div className="container">
            <div className="input-block">
                <input type="number"
                       value={num}
                       onChange={handleNumInput}
                       onKeyUp={(event) => {
                           if (event.key === 'Enter') compareAnswer();
                       }}
                       placeholder={NUM_INPUT_PLACEHOLDER} />
            </div>
            <div className="button-area">
                <button onClick={random4Digits} id="Generate" >Generate</button>
            </div>
            <div className="notice-block">{notice}</div>
            <div className="result-block">{result}</div>
            <div className="record-block"><RenderRecord/></div>
        </div>
    );
}

render.render(<App />);