export const env =  {
    LOG: {
        DEBUG: true,
        VERBOSE: true,
        TIME: true
    },
    LOCAL: {
        STORAGE: {
            CURRENT_TARGET: "currentTarget",
            CURRENT_RECORD: "currentRecord",
            CURRENT_STEP: "currentStep",
            CURRENT_HIGHEST_SCORE: "currentHighestScore",
            IS_WINNING: "isWinning",
            PLAYING_HISTORY: "playingHistory",
            PLAYER_NAME: "playerName",
            ROOM_ID: "roomID"
        },
    },
    GAME: {
        NUMBER_RANGE: [...Array(10).keys()],
        RULE: [
            "這是幾 A 幾 B 的小遊戲，請輸入 4 個不重複的數字，從 0 到 9。",
            "程式會自動產生隨機題目，若輸入的數字與題目相對應位置的數字相符，則會得到 A；",
            "若輸入的數字與題目不同位置的數字相符，則會得到 B。",
            "目標為獲得 4A。"
        ]
    }
};