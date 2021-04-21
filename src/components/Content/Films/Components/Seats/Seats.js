import React from "react";
import { Seat } from "./Seat";
import "../../FilmsStyles.scss";

export const Seats = ({ seatArr, seatSelected, handleSelect }) => {

    // const handleSelect = (seat) => {
    //     if (!seat.isSelected) {
    //         const seatIndex = seatSelected.indexOf(seat.index);
    //         const newSeatSelected = [...seatSelected];
    //         if (seatIndex !== -1) {
    //             newSeatSelected.splice(seatIndex, 1);
    //             setSeatSelected(newSeatSelected);
    //         } else {
    //             newSeatSelected.push(seat.index);
    //             setSeatSelected(newSeatSelected);
    //         }
    //     }
    // };

    // useEffect(() => {
    //     console.log('seatSelected: ', seatSelected);
    // }, [seatSelected]);

    return (
        <>
            <div className="row col-5 m-auto">
                {seatArr.map((item, index) => {
                    return (
                    <Seat 
                        key={index} 
                        item={item} 
                        handleSelect={handleSelect}
                        isSelect={seatSelected?.indexOf(item.index) !== -1 || item.isSelected} />
                    )
                })}
            </div>
            <div className="m-auto col-5">
                <div className="row ml-1">
                    <div className="seat-selected"></div>
                    <div style={{ margin: 5 }}>Ghế trống</div>
                </div>
                <div className="row ml-1">
                    <div className="seat-available"></div>
                    <div style={{ margin: 5 }}>Đã đặt</div>
                </div>
            </div>
        </>
    );
};
