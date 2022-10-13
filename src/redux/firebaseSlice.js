import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    token: null
};

export const firebaseSlice = createSlice({
    name: 'firebase',
    initialState: defaultState,
    reducers: {
        setToken: {
            reducer: (state,action) => {
                state.token = action.payload;
            },
            prepare: (token) => {
                return {payload: token};
            }
        },
    }
});

export const { setToken } = firebaseSlice.actions;
export default firebaseSlice.reducer;