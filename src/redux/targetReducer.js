
const SET_TARGET = "SET_TARGET";

const initialState = {
    target: ''
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_TARGET:
            return {
                ...state,
                target: action.target
            };
        default:
            return state;
    }
};

export default reducer;

export const setTarget = (target) => {
    return {
        type: SET_TARGET,
        target: target,
    };
};