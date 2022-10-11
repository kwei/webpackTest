
const SET_NUMBER = "SET_NUMBER";

const initialState = {
    num: ''
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_NUMBER:
            return {
                ...state,
                num: action.num
            };
        default:
            return state;
    }
};

export default reducer;

export const setNumber = (num) => {
    return {
        type: SET_NUMBER,
        num: num,
    };
};