import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    user: null
};

export const userSlice = createSlice({
    name: 'user',
    initialState: defaultState,
    reducers: {
        setUser: {
            reducer: (state,action) => {
                state.user = action.payload;
            },
            prepare: (user) => {
                return {payload: user};
            }
        },
        resetUser: {
            reducer: (state,action) => {
                state.user = action.payload;
            },
            prepare: () => {
                return {payload: null};
            }
        },
    }
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;