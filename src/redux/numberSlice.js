import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    num: ""
};

export const numberSlice = createSlice({
    name: 'num',
    initialState: defaultState,
    reducers: {
        setNumber: {
            reducer: (state,action) => {
                state.num = action.payload;
            },
            prepare: (num) => {
                return {payload: num};
            }
        },
        resetNumber: {
            reducer: (state,action) => {
                state.num = action.payload;
            },
            prepare: () => {
                return {payload: ""};
            }
        },
    }
});

export const { setNumber, resetNumber } = numberSlice.actions;
export default numberSlice.reducer;