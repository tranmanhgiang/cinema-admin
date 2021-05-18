import React from "react";
import dayjs from "dayjs";

export const ScheduleRowItem = ({index, item, onClickItem, listFilms}) => {
    return (
        <tr onClick={onClickItem}>
            <td>{index + 1}</td>
            <td>{listFilms?.find((film) => film.id === parseInt(item.filmId))?.filmName}</td>
            <td>{`Rạp ${item.roomId}`}</td>
            <td>{dayjs(parseInt(item.timeMilestones)).format('HH:mm A')}</td>
        </tr>
    );
};
