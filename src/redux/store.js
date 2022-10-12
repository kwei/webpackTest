import { configureStore } from '@reduxjs/toolkit';

import num from "./numberSlice";
import target from "./targetSlice";
import noticeReducer from "./noticeSlice";
import record from "./recordSlice";
import status from "./statusSlice";

export default configureStore({
    reducer: {
        num: num,
        target: target,
        notice: noticeReducer,
        record: record,
        status: status,
    },
});