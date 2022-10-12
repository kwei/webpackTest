import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    num: ''
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
    }
});

export const { setNumber } = numberSlice.actions;
export default numberSlice.reducer;