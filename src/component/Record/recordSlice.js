import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    record: [],
    highestScore: "尚無紀錄"
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
        setHighestScore: {
            reducer: (state,action) => {
                state.highestScore = action.payload;
            },
            prepare: (highestScore) => {
                return {payload: highestScore};
            }
        },
        resetHighestScore: {
            reducer: (state,action) => {
                state.highestScore = action.payload;
            },
            prepare: () => {
                return {payload: "尚無紀錄"};
            }
        },
    }
});

export const { setRecord, resetRecord, setHighestScore, resetHighestScore } = recordSlice.actions;
export default recordSlice.reducer;