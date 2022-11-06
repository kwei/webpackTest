import React from "react";

const WinningModal = (props) => {
    const data = props.data;
    const handleOnclick = props.action.confirm;
    const actionName = props.actionName;

    return (
        <div className={"alert-block"}>
            <div className="alert-header">{data.header}</div>
            <div className="alert-content">{data.content}</div>
            <div className="alert-footer">
                <button className="next-round-btn" value="Next Round" onClick={handleOnclick}>{actionName}</button>
            </div>
        </div>
    );
};

export default React.memo(WinningModal);