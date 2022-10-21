import React, {useEffect, useState} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import { MdCircleNotifications } from "react-icons/md";

const Notification = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [msg, setMsg] = useState('');

    return(
        <div className={classNames("notification", {"show": show})}>
            <i className="notification-icon"><MdCircleNotifications size={30}/></i>
            <div className="notification-body">{msg?.notification?.body}</div>
        </div>
    );
};

export default React.memo(Notification);