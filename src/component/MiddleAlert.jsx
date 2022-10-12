import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { random4Digits } from "../module/random4Digits";
import { setTarget } from "../redux/targetSlice";
import { changeAlertStatus } from "../redux/statusSlice";
import {useSelector, useDispatch, shallowEqual} from "react-redux";

const MiddleAlert = (props) => {
    const dispatch = useDispatch();
    const data = props.data;
    const alertBlockRef = useRef(null);
    const isAlertClosed = useSelector(state => state.status.isAlertClosed, shallowEqual);

    useEffect(() => {
        document.addEventListener("mousedown", (event) => {
            if (alertBlockRef.current && !alertBlockRef.current.contains(event.target)) dispatch(changeAlertStatus(true));
        });
    }, [alertBlockRef]);

    return (
        <div className={classNames("alert-block", {"close": isAlertClosed})} ref={ref => alertBlockRef.current = ref}>
            <div className="alert-header">{data.header}</div>
            <div className="alert-content">{data.content}</div>
            <div className="alert-footer">
                <button className="next-round-btn" value="Next Round" onClick={() => {
                    random4Digits((result) => {
                        dispatch(setTarget(result));
                    });
                    props.resetStates();
                }}>重新開始</button>
            </div>
        </div>
    );
};

export default MiddleAlert;