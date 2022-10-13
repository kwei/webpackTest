import React from "react";
import { shallowEqual, useSelector } from "react-redux";

const RenderRecord = () => {
    const record = useSelector(state => state.record.record, shallowEqual);
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

export default React.memo(RenderRecord);