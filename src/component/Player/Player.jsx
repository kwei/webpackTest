import React from "react";

const Player = (props) => {
    const playerName = props.playerName;

    return (
        <div className="playerName">
            {playerName}
        </div>
    );
};

export default Player;