import {shuffleArray} from "./shuffleArray";

const baseNumbers = [...Array(10).keys()];

export const random4Digits = (callback) => {
    const randomBaseNumbers = shuffleArray(baseNumbers);
    callback(randomBaseNumbers.slice(0, 4).join(''));
};