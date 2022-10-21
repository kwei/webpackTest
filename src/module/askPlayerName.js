import { Storage } from "./storage";
const storage = Storage();

export const askPlayerName = () => {
    let name = window.prompt("請輸入您的遊玩名稱(預設：匿名玩家)", "匿名玩家");
    if (name === null || "") name = "匿名玩家";
    storage.setStorage('playerName', name);
    return name;
};