import { createSlice } from "@reduxjs/toolkit";
import {shuffleArray} from "../module/shuffleArray";

const baseNumbers = [...Array(10).keys()];
const defaultState = {
    num: shuffleArray(baseNumbers).slice(0, 4).join('')
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