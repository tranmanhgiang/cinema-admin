import React from "react";
import '../../FilmsStyles.scss';

export const Seat = ({item, isSelect, handleSelect}) => {
    return (
        <div className="seat col-1" style={{ backgroundColor: isSelect ? 'red' : ''}} onClick={() => handleSelect(item)}>
            <div style={{ color: isSelect ? 'white' : ''}}>{item.index}</div>
        </div>
    );
};
