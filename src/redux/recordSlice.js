import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    record: []
};

export const recordSlice = createSlice({
    name: 'record',
    initialState: defaultState,
    reducers: {
        setRecord: {
            reducer: (state,action) => {
                state.record.push(action.payload);
            },
            prepare: (newRecord) => {
                return {payload: newRecord};
            }
        },
        resetRecord: {
            reducer: (state,action) => {
                state.record = action.payload;
            },
            prepare: () => {
                return {payload: []};
            }
        },
    }
});

export const { setRecord, resetRecord } = recordSlice.actions;
export default recordSlice.reducer;