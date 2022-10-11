import { configureStore } from '@reduxjs/toolkit';

import num from "./numReducer";
import target from "./targetReducer";
import notice from "./noticeReducer";
import record from "./recordReducer";
import status from "./statusReducer";

export default configureStore({
    reducer: {
        num,
        target,
        notice,
        record,
        status
    },
});