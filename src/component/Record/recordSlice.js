import { createSlice } from "@reduxjs/toolkit";
import { Storage } from "../../module/storage";

const storage = Storage();

const getPlayingHistory = () => {
    let currentHistory = Array(0);
    storage.getStorage('playingHistory').split(',').map(str => {
        currentHistory.push(Number(str));
    });
    if (currentHistory.length !== 0) {
        return Math.min(...currentHistory).toString();
    } else return "尚無紀錄";
};

const getCurrentRecord = () => {
    const currentRecord = storage.getStorage('currentRecord');
    if (currentRecord) return currentRecord.split(',');
    else return [];
};

const defaultState = {
    record: getCurrentRecord(),
    highestScore: getPlayingHistory()
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