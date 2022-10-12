import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    notice: ''
};

export const noticeSlice = createSlice({
    name: 'notice',
    initialState: defaultState,
    reducers: {
        setNotice: {
            reducer: (state,action) => {
                state.notice = action.payload;
            },
            prepare: (notice) => {
                return {payload: notice};
            }
        },
    }
});

export const { setNotice } = noticeSlice.actions;
export default noticeSlice.reducer;