import React, {useEffect, useRef} from "react";
import classNames from "classnames";
import {random4Digits} from "../module/random4Digits";
import store from "../redux/store";
import {setTarget} from "../redux/targetReducer";
import {changeAlertStatus} from "../redux/statusReducer";

const MiddleAlert = (props) => {
    const data = props.data;
    const alertBlockRef = useRef(null);
    const isAlertClosed = store.getState().status.isAlertClosed;

    useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            if (alertBlockRef.current && !alertBlockRef.current.contains(event.target)) store.dispatch(changeAlertStatus(true));
        });
    }, [alertBlockRef]);

    return (
        <div className={classNames("alert-block", {"close": isAlertClosed})} ref={ref => alertBlockRef.current = ref}>
            <div className="alert-header">{data.header}</div>
            <div className="alert-content">{data.content}</div>
            <div className="alert-footer">
                <button className="next-round-btn" value="Next Round" onClick={() => {
                    random4Digits((result) => {
                        store.dispatch(setTarget(result));
                    });
                    props.resetStates();
                }}>重新開始</button>
            </div>
        </div>
    );
};

export default MiddleAlert;