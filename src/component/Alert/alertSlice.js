import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    isAlertVisible: false,
};

export const alertSlice = createSlice({
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
    }
});

export const { setAlertVisible } = alertSlice.actions;
export default alertSlice.reducer;