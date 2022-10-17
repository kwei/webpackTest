import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    msg: ""
};

export const noticeSlice = createSlice({
    name: 'notice',
    initialState: defaultState,
    reducers: {
        setNotice: {
            reducer: (state,action) => {
                state.msg = action.payload;
            },
            prepare: (notice) => {
                return {payload: notice};
            }
        },
        resetNotice: {
            reducer: (state,action) => {
                state.msg = action.payload;
            },
            prepare: () => {
                return {payload: ""};
            }
        },
    }
});

export const { setNotice, resetNotice } = noticeSlice.actions;
export default noticeSlice.reducer;