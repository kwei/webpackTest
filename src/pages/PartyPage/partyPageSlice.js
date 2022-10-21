import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    roomID: "HOST",
};

export const partyPageSlice = createSlice({
    name: 'party',
    initialState: defaultState,
    reducers: {
        setRoom: {
            reducer: (state,action) => {
                state.roomID = action.payload;
            },
            prepare: (roomID) => {
                return {payload: roomID};
            }
        },
    }
});

export const { setRoom } = partyPageSlice.actions;
export default partyPageSlice.reducer;