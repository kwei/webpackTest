import MiddleAlert from "./MiddleAlert.jsx";
import React from "react";
import { shallowEqual, useSelector } from "react-redux";


const Alert = (props) => {
    const winningStep = useSelector(state => state.alertReducer.winningStep, shallowEqual);
    const isAlertVisible = props.isAlertVisible;
    return(
        <div className="modal-alert">
            <MiddleAlert
                data={{
                    "header": "遊戲獲勝",
                    "content": `一共花了 ${winningStep} 步。`
                }}
                actionName="重新一局"
                isAlertVisible={isAlertVisible}
                action={props.action}
            />
        </div>
    );
};

export default React.memo(Alert);