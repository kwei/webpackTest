import React from "react";

const InfoBlock = (props) => {
    const text = props.text;
    return (
        <div className="info">
            {text.map((value, index) => {
                return (<span key={index}>{value}</span>);
            })}
        </div>
    );
};

export default React.memo(InfoBlock);