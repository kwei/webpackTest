import React from "react";
import classNames from "classnames";

const MiddleAlert = (props) => {
    const data = props.data;
    const bgColor = props.bgColor;
    const handleOnclick = props.action;
    const actionName = props.actionName;
    const isAlertVisible = props.isAlertVisible;

    return (
        <div className={classNames("alert-block", {"close": !isAlertVisible})} style={{backgroundColor: bgColor}}>
            <div className="alert-header">{data.header}</div>
            <div className="alert-content">{data.content}</div>
            <div className="alert-footer">
                <button className="next-round-btn" value="Next Round" onClick={handleOnclick}>{actionName}</button>
            </div>
        </div>
    );
};

export default React.memo(MiddleAlert);