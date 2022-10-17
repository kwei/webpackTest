import { configureStore } from '@reduxjs/toolkit';

import numberReducer from "./numberSlice";
import targetReducer from "./targetSlice";
import noticeReducer from "./noticeSlice";
import recordReducer from "./recordSlice";
import statusReducer from "./statusSlice";
import userReducer from "./userSlice";

export default configureStore({
    reducer: {
        numberReducer: numberReducer,
        userReducer: userReducer,
        targetReducer: targetReducer,
        noticeReducer: noticeReducer,
        recordReducer: recordReducer,
        statusReducer: statusReducer,
    },
});