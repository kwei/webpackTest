import React from "react";
import { askPlayerName } from "../../module/askPlayerName";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setUser } from "./userSlice";

const Player = () => {
    const dispatch = useDispatch();
    const playerName = useSelector(state => state.userReducer.name, shallowEqual);

    return (
        <span className="playerName" onClick={() => dispatch(setUser(askPlayerName()))}>{playerName}</span>
    );
};

export default Player;