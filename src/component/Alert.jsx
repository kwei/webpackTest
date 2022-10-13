import MiddleAlert from "./MiddleAlert.jsx";
import React from "react";
import { shallowEqual, useSelector } from "react-redux";


const Alert = (props) => {
    const isWin = useSelector(state => state.status.isWin, shallowEqual);
    return(
        <div id="overlay">
            <div className="modal-alert">
                {isWin &&
                    <MiddleAlert
                        data={props.msg}
                        bgColor={props.bgColor}
                        actionName={props.actionName}
                        action={props.action}
                    />
                }
            </div>
        </div>
    );
};

export default React.memo(Alert);