import { configureStore } from '@reduxjs/toolkit';

import targetReducer from "./targetSlice";
import recordReducer from "../component/Record/recordSlice";
import alertReducer from "../component/Alert/alertSlice";
import userReducer from "../component/Player/userSlice";

export default configureStore({
    reducer: {
        userReducer: userReducer,
        targetReducer: targetReducer,
        recordReducer: recordReducer,
        alertReducer: alertReducer,
    },
});