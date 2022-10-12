import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    target: ''
};

export const targetSlice = createSlice({
    name: 'target',
    initialState: defaultState,
    reducers: {
        setTarget: {
            reducer: (state,action) => {
                state.target = action.payload;
            },
            prepare: (target) => {
                return {payload: target};
            }
        },
    }
});

export const { setTarget } = targetSlice.actions;
export default targetSlice.reducer;