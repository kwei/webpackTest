import React from "react";
import { VscDebugRestart } from "react-icons/vsc";

const RestartBtn = (props) => {
    const onClick = props.onClick;
    const value = props.value;
    return (
        <button onClick={onClick} id="Generate">{value} <VscDebugRestart style = {{transform: 'translateY(2px)'}}/></button>
    );
};

export default React.memo(RestartBtn);