import React from "react";

const Record = (props) => {
    const record = props.record;
    return (
        <ul className="ul-no-bullet">
            {record.length > 0 &&
                record.map((item, index) => {
                    return (
                        <li key={index} className="record-item">
                            <div className="item">
                                <div className="record-item-input">{item.split(":")[0]}</div>
                                <i className="record-item-arrow"></i>
                                <div className="record-item-result">{item.split(":")[1]}</div>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default React.memo(Record);