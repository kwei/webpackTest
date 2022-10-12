
const CHANGE_WIN_STATUS = "CHANGE_WIN_STATUS";
const CHANGE_ALERT_STATUS = "CHANGE_ALERT_STATUS";
const CHANGE_INPUT_STATUS = "CHANGE_INPUT_STATUS";
const CHANGE_HIGHEST_SCORE = "CHANGE_HIGHEST_SCORE";

const initialState = {
    isWin: false,
    isAlertClosed: false,
    inputDisabled: false,
    highestScore: '尚無紀錄'
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_WIN_STATUS:
            return {
                ...state,
                isWin: action.isWin
            };
        case CHANGE_ALERT_STATUS:
            return {
                ...state,
                isAlertClosed: action.isAlertClosed
            };
        case CHANGE_INPUT_STATUS:
            return {
                ...state,
                inputDisabled: action.inputDisabled
            };
        case CHANGE_HIGHEST_SCORE:
            return {
                ...state,
                highestScore: action.highestScore
            };
        default:
            return state;
    }
};

export default reducer;

export const changeWinningStatus = (isWin) => {
    return {
        type: CHANGE_WIN_STATUS,
        isWin: isWin,
    };
};

export const changeAlertStatus = (isAlertClosed) => {
    return {
        type: CHANGE_ALERT_STATUS,
        isAlertClosed: isAlertClosed,
    };
};

export const changeInputStatus = (inputDisabled) => {
    return {
        type: CHANGE_INPUT_STATUS,
        inputDisabled: inputDisabled,
    };
};

export const changeHighestScore = (highestScore) => {
    return {
        type: CHANGE_HIGHEST_SCORE,
        highestScore: highestScore,
    };
};