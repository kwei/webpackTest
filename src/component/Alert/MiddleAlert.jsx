import React from "react";
import { useSpring, animated } from "@react-spring/web";

const MiddleAlert = (props) => {
    const data = props.data;
    const handleOnclick = props.action;
    const actionName = props.actionName;
    const isAlertVisible = props.isAlertVisible;

    const { xy } = useSpring({
        xy: isAlertVisible? 1: 0 ,
        config: { duration: 500 },
    });

    return (
        <animated.div style={{
            transform: xy
                .to({
                    range:  [0, 0.2, 0.5, 0.8 , 1],
                    output: [1, 1.3, 0.8, 1.1, 1],
                })
                .to(xy => `scale(${xy})`),
        }}>
            <div className={"alert-block"}>
                <div className="alert-header">{data.header}</div>
                <div className="alert-content">{data.content}</div>
                <div className="alert-footer">
                    <button className="next-round-btn" value="Next Round" onClick={handleOnclick}>{actionName}</button>
                </div>
            </div>
        </animated.div>
    );
};

export default React.memo(MiddleAlert);