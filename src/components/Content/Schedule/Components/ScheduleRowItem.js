import React from "react";
import dayjs from "dayjs";

export const ScheduleRowItem = ({index, item, onClickItem}) => {
    return (
        <tr onClick={onClickItem}>
            <td>{index}</td>
            <td>{item.filmName}</td>
            <td>{item.name}</td>
            <td>{dayjs(item.date).format('DD/MM/YYYY')}</td>
            <td>{dayjs(item.timeMilestones).format('HH:mm A')}</td>
        </tr>
    );
};
