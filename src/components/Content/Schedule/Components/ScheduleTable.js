import React from "react";
import { ScheduleRowItem } from "./ScheduleRowItem";

export const ScheduleTable = ({scheduleData}) => {
    return (
        <div className="card-body">
            <table id="example2" className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Phim</th>
                        <th>Phòng chiếu</th>
                        <th>Ngày</th>
                        <th>Giờ chiếu</th>
                    </tr>
                </thead>
                <tbody>
                    {scheduleData.map((item, index) => {
                        return <ScheduleRowItem key={index} index={index} item={item} />
                    })}
                </tbody>
            </table>
        </div>
    );
};
