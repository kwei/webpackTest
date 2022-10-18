import { createSlice } from "@reduxjs/toolkit";
import { shuffleArray } from "../module/shuffleArray";
import { Logger } from "../module/logger";

const logger = Logger({className: "targetSlice"});

const baseNumbers = [...Array(10).keys()];
const initTarget = shuffleArray(baseNumbers).slice(0, 4).join('');
logger.verbose(`New target number: ${initTarget}`);

const defaultState = {
    num: initTarget
};

export const targetSlice = createSlice({
    name: 'target',
    initialState: defaultState,
    reducers: {
        setTarget: {
            reducer: (state,action) => {
                state.num = action.payload;
            },
            prepare: () => {
                return {payload: shuffleArray(baseNumbers).slice(0, 4).join('')};
            }
        },
    }
});

export const { setTarget } = targetSlice.actions;
export default targetSlice.reducer;