import { createSlice } from "@reduxjs/toolkit";
import {shuffleArray} from "../module/shuffleArray";

const baseNumbers = [...Array(10).keys()];
const defaultState = {
    target: shuffleArray(baseNumbers).slice(0, 4).join('')
};

export const targetSlice = createSlice({
    name: 'target',
    initialState: defaultState,
    reducers: {
        setTarget: {
            reducer: (state,action) => {
                state.target = action.payload;
            },
            prepare: () => {
                return {payload: shuffleArray(baseNumbers).slice(0, 4).join('')};
            }
        },
    }
});

export const { setTarget } = targetSlice.actions;
export default targetSlice.reducer;