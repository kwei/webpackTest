import React from "react";
import { askPlayerName } from "../../module/askPlayerName";
import { shallowEqual, useSelector } from "react-redux";

const Player = () => {
    const playerName = useSelector(state => state.userReducer.name, shallowEqual);

    return (
        <span className="playerName" onClick={() => askPlayerName()}>{playerName}</span>
    );
};

export default Player;