import React, { useEffect, useRef } from "react";
import classNames from "classnames";
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
        <div className={classNames("alert-block", {"close": isAlertClosed})} ref={ref => alertBlockRef.current = ref} style={{backgroundColor: props.bgColor}}>
            <div className="alert-header">{data.header}</div>
            <div className="alert-content">{data.content}</div>
            <div className="alert-footer">
                <button className="next-round-btn" value="Next Round" onClick={() => props.action()}>{props.actionName}</button>
            </div>
        </div>
    );
};

export default React.memo(MiddleAlert);