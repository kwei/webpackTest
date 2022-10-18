import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    isAlertVisible: false,
};

export const AlertSlice = createSlice({
    name: 'status',
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

export const { setAlertVisible } = AlertSlice.actions;
export default AlertSlice.reducer;