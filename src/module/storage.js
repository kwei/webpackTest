import store from "../redux/store";
import {changeHighestScore} from "../redux/statusReducer";

export const Storage =() => {
    const setStorage = (key, value) => {
        localStorage.setItem(key, value);
    };

    const getStorage = (key) => {
        return localStorage.getItem(key);
    };

    const removeStorage = (key) => {
        localStorage.removeItem(key);
        store.dispatch(changeHighestScore('尚無紀錄'))
    };

    const clearStorage = () => {
        localStorage.clear();
    };

    return {
        setStorage, getStorage, removeStorage, clearStorage
    };
};