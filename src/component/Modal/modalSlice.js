import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    isAlertVisible: false,
    winningStep: "",
};

export const modalSlice = createSlice({
    name: 'alert',
    initialState: defaultState,
    reducers: {
        setAlertVisible: {
            reducer: (state,action) => {
                state.isAlertVisible = action.payload;
            },
            prepare: (isAlertVisible) => {
                return {payload: isAlertVisible};
            }
        },
        setWinningStep: {
            reducer: (state,action) => {
                state.winningStep = action.payload;
            },
            prepare: (winningStep) => {
                return {payload: winningStep};
            }
        },
    }
});

export const { setAlertVisible, setWinningStep } = modalSlice.actions;
export default modalSlice.reducer;