import { configureStore } from '@reduxjs/toolkit';

import recordReducer from "../component/Record/recordSlice";
import alertReducer from "../component/Alert/alertSlice";
import userReducer from "../component/Player/userSlice";

export default configureStore({
    reducer: {
        userReducer: userReducer,
        recordReducer: recordReducer,
        alertReducer: alertReducer,
    },
});