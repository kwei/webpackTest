import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    isWin: false,
    isAlertClosed: false,
    inputDisabled: false,
    highestScore: '尚無紀錄'
};

export const statusSlice = createSlice({
    name: 'status',
    initialState: defaultState,
    reducers: {
        changeWinningStatus: {
            reducer: (state,action) => {
                state.isWin = action.payload;
            },
            prepare: (isWin) => {
                return {payload: isWin};
            }
        },
        changeAlertStatus: {
            reducer: (state,action) => {
                state.isAlertClosed = action.payload;
            },
            prepare: (isAlertClosed) => {
                return {payload: isAlertClosed};
            }
        },
        changeInputStatus: {
            reducer: (state,action) => {
                state.inputDisabled = action.payload;
            },
            prepare: (inputDisabled) => {
                return {payload: inputDisabled};
            }
        },
        changeHighestScore: {
            reducer: (state,action) => {
                state.highestScore = action.payload;
            },
            prepare: (highestScore) => {
                return {payload: highestScore};
            }
        },
    }
});

export const { changeWinningStatus, changeAlertStatus, changeInputStatus, changeHighestScore } = statusSlice.actions;
export default statusSlice.reducer;