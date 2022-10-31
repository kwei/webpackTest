import WinningModal from "./WinningModal.jsx";
import React, { useRef } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { createPortal } from "react-dom";


const Modal = (props) => {
    const winningStep = useSelector(state => state.alertReducer.winningStep, shallowEqual);
    const isAlertVisible = props.isAlertVisible;
    const portalTarget = props.portalTarget? props.portalTarget : document.body;
    const handleOverlayClick = props.action.cancel;
    const overlayRef = useRef(null);
    const alertType = props.alertType;

    const alertComponent = () => {
        if (alertType === "winning") {
            return (
                <WinningModal
                    data={{
                        "header": "遊戲獲勝",
                        "content": `一共花了 ${winningStep} 步。`
                    }}
                    actionName="重新一局"
                    action={ props.action }
                />
            );
        } else {
            return null;
        }
    }

    return(
        isAlertVisible?
        createPortal(<>
            {isAlertVisible &&
                <div ref={overlayRef} id="overlay" onClick={handleOverlayClick}>
                    <div className="modal-alert">
                        { alertComponent() }
                    </div>
                </div>
            }
        </>, portalTarget) : null
    );
};

export default React.memo(Modal);