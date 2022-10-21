import MiddleAlert from "./MiddleAlert.jsx";
import React from "react";


const Alert = (props) => {
    return(
        <div className="modal-alert">
            {props.isWin &&
                <MiddleAlert
                    data={props.msg}
                    bgColor={props.bgColor}
                    actionName={props.actionName}
                    action={props.action}
                />
            }
        </div>
    );
};

export default React.memo(Alert);