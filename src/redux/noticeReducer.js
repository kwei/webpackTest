
const SET_NOTICE = "SET_NOTICE";

const initialState = {
    notice: ''
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_NOTICE:
            return {
                ...state,
                notice: action.notice
            };
        default:
            return state;
    }
};

export default reducer;

export const setNotice = (notice) => {
    return {
        type: SET_NOTICE,
        notice: notice,
    };
};