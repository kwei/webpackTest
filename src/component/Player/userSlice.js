import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    name: "匿名玩家"
};

export const userSlice = createSlice({
    name: 'user',
    initialState: defaultState,
    reducers: {
        setUser: {
            reducer: (state,action) => {
                state.name = action.payload;
            },
            prepare: (user) => {
                return {payload: user};
            }
        }
    }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;