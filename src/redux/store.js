import { configureStore } from '@reduxjs/toolkit';

import numberReducer from "./numberSlice";
import targetReducer from "./targetSlice";
import noticeReducer from "./noticeSlice";
import recordReducer from "./recordSlice";
import statusReducer from "./statusSlice";
import userReducer from "./userSlice";
import firebaseSlice from "./firebaseSlice";

export default configureStore({
    reducer: {
        num: numberReducer,
        user: userReducer,
        firebase: firebaseSlice,
        target: targetReducer,
        notice: noticeReducer,
        record: recordReducer,
        status: statusReducer,
    },
});