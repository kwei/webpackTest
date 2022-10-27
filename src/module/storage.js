import { env } from '../../env';

export const Storage =() => {
    const setStorage = (key, value) => {
        localStorage.setItem(key, value);
    };

    const getStorage = (key) => {
        return localStorage.getItem(key);
    };

    const removeStorage = (key) => {
        localStorage.removeItem(key);
    };

    const clearStorage = () => {
        localStorage.clear();
    };

    const loadAll = (initStates) => {
        let { initTarget, initRecord, initStep, initIsWinning, initPlayingHistory, initHighestScore, initAverageScore } = initStates;
        const currentTarget = getStorage(env.LOCAL.STORAGE.CURRENT_TARGET);
        const currentRecord = getStorage(env.LOCAL.STORAGE.CURRENT_RECORD);
        const currentStep = getStorage(env.LOCAL.STORAGE.CURRENT_STEP);
        const currentIsWinning = getStorage(env.LOCAL.STORAGE.IS_WINNING);
        const currentPlayingHistory = getStorage(env.LOCAL.STORAGE.PLAYING_HISTORY);
        const currentHighestScore = getStorage(env.LOCAL.STORAGE.CURRENT_HIGHEST_SCORE);
        const currentAverageScore = getStorage(env.LOCAL.STORAGE.AVERAGE_SCORE);

        if (currentTarget !== null) initTarget = currentTarget;
        else setStorage(env.LOCAL.STORAGE.CURRENT_TARGET, initTarget);

        if (currentRecord !== null && currentRecord !== "") initRecord = currentRecord.split(",");
        else setStorage(env.LOCAL.STORAGE.CURRENT_RECORD, initRecord);

        if (currentStep !== null) initStep = Number(currentStep);
        else setStorage(env.LOCAL.STORAGE.CURRENT_STEP, initStep);

        if (currentIsWinning !== null) initIsWinning = currentIsWinning !== "false";
        else setStorage(env.LOCAL.STORAGE.IS_WINNING, initIsWinning);

        if (currentPlayingHistory !== null) initPlayingHistory = currentPlayingHistory;
        else setStorage(env.LOCAL.STORAGE.PLAYING_HISTORY, initPlayingHistory);

        if (currentHighestScore !== null) initHighestScore = currentHighestScore;
        else setStorage(env.LOCAL.STORAGE.CURRENT_HIGHEST_SCORE, initHighestScore);

        if (currentAverageScore !== null) initAverageScore = Number(currentAverageScore);
        else setStorage(env.LOCAL.STORAGE.AVERAGE_SCORE, initAverageScore);

        return { initTarget, initRecord, initStep, initIsWinning, initPlayingHistory, initHighestScore, initAverageScore };
    }

    const saveAll = (currentStates) => {
        let { currentTarget, currentRecord, currentStep, currentIsWinning, currentPlayingHistory, currentHighestScore, currentAverageScore } = currentStates;
        if (currentTarget !== undefined) setStorage(env.LOCAL.STORAGE.CURRENT_TARGET, currentTarget);
        if (currentRecord !== undefined) setStorage(env.LOCAL.STORAGE.CURRENT_RECORD, currentRecord);
        if (currentStep !== undefined) setStorage(env.LOCAL.STORAGE.CURRENT_STEP, currentStep);
        if (currentIsWinning !== undefined) setStorage(env.LOCAL.STORAGE.IS_WINNING, currentIsWinning);
        if (currentPlayingHistory !== undefined) setStorage(env.LOCAL.STORAGE.PLAYING_HISTORY, currentPlayingHistory);
        if (currentHighestScore !== undefined) setStorage(env.LOCAL.STORAGE.CURRENT_HIGHEST_SCORE, currentHighestScore);
        if (currentAverageScore !== undefined) setStorage(env.LOCAL.STORAGE.AVERAGE_SCORE, currentAverageScore);
    }

    return {
        setStorage, getStorage, removeStorage, clearStorage, loadAll, saveAll
    };
};