import React from "react";

const Notice = (props) => {
    return props.text;
};

export default React.memo(Notice);