import React, {useEffect, useState} from "react";
import { fetchToken, onMessageListener } from "../module/firebase";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import { setToken } from "../redux/firebaseSlice";


const Notification = () => {
    const dispatch = useDispatch();
    const messagingToken = useSelector(state => state.firebase.token, shallowEqual);
    const [show, setShow] = useState(false);
    const [msg, setMsg] = useState('');

    useEffect(() => {
        fetchToken().then((token) => {
            dispatch(setToken(token));
        });
    }, []);

    onMessageListener().then((msg) => {
        const msgObject = {
            messageId: msg.messageId,
            collapseKey: msg.collapseKey,
            data: msg.data,
            from: msg.from,
            notificationtitle: msg.notification.title,
            notificationBody: msg.notification.body,
        };
        setMsg(msg);
        console.log("msg: ", msgObject);
        if (msg !== '') setShow(true);
        setTimeout(() => setShow(false), 3000);
    });

    return(
        <div className={classNames("notification", {"show": show})}>
            <div className="notification-title">{msg?.notification?.title}:</div>
            <div className="notification-body">{msg?.notification?.body}</div>
        </div>
    );
};

export default React.memo(Notification);