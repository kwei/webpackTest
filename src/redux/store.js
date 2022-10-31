import { configureStore } from '@reduxjs/toolkit';

import recordReducer from "../component/Record/recordSlice";
import alertReducer from "../component/Modal/modalSlice";
import userReducer from "../component/Player/userSlice";
import partyPageReducer from "../pages/PartyPage/partyPageSlice";

export default configureStore({
    reducer: {
        userReducer: userReducer,
        recordReducer: recordReducer,
        alertReducer: alertReducer,
        partyPageReducer: partyPageReducer,
    },
});