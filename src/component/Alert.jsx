import MiddleAlert from "./MiddleAlert.jsx";
import React from "react";
import store from "../redux/store";


const Alert = (props) => {
    const isWin = store.getState().status.isWin;
    return(
        <div id="overlay">
            <div className="modal-alert">
                {isWin && <MiddleAlert
                    data={
                        {
                            "header": "Game Information",
                            "content": "Win!"
                        }
                    }
                    resetStates={props.resetStates}/>
                }
            </div>
        </div>
    );
};

export default Alert;