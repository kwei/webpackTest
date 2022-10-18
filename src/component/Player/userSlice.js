import { createSlice } from "@reduxjs/toolkit";
import { Storage } from "../../module/storage";

const storage = Storage();

const defaultState = {
    name: "匿名玩家"
};

export const userSlice = createSlice({
    name: 'user',
    initialState: defaultState,
    reducers: {
        setUser: {
            reducer: (state,action) => {
                state.name = action.payload;
            },
            prepare: (user) => {
                return {payload: user};
            }
        },
        initUser: {
            reducer: (state) => {
                const _playerName = storage.getStorage('playerName');
                if (!_playerName) {
                    let name = window.prompt("請輸入您的遊玩名稱(預設：匿名玩家)", "匿名玩家");
                    if (name === null || name.length === 0) {
                        name = "匿名玩家";
                        storage.setStorage('playerName', name);
                    } else state.name = name;
                } else state.name = _playerName;
            },
            prepare: () => {
                return {payload: null};
            }
        }
    }
});

export const { setUser, initUser } = userSlice.actions;
export default userSlice.reducer;