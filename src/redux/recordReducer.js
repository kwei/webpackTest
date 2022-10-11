
const SET_RECORD = "SET_RECORD";
const RESET_RECORD = "RESET_RECORD";

const initialState = {
    record: []
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_RECORD:
            return {
                ...state,
                record: [...state.record, action.record]
            };
            case RESET_RECORD:
            return {
                ...state,
                record: []
            };
        default:
            return state;
    }
};

export default reducer;

export const setRecord = (record) => {
    return {
        type: SET_RECORD,
        record: record,
    };
};

export const resetRecord = () => {
    return {
        type: RESET_RECORD
    };
};