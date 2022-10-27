import zhTW from './langs/zh_TW.json';

export const formatWording = (msgID, key) => {
    let result = zhTW[msgID];
    Object.entries(key).forEach(([k, v]) => {
        result = result.replace("{" + k + "}", v);
    });
    return result;
};