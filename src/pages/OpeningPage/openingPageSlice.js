import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    pageID: "/",
};

export const openingPageSlice = createSlice({
    name: 'openingPage',
    initialState: defaultState,
    reducers: {
        switchPage: {
            reducer: (state,action) => {
                state.pageID = action.payload;
            },
            prepare: (pageID) => {
                return {payload: pageID};
            }
        },
    }
});

export const { switchPage } = openingPageSlice.actions;
export default openingPageSlice.reducer;