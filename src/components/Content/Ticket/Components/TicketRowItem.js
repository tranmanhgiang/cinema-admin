import React from "react";
import dayjs from 'dayjs';

export const TicketRowItem = ({index, item, onClickItem}) => {
    return (
        <tr onClick={onClickItem}>
            <td>{index}</td>
            <td>{item.lastName + item.firstName}</td>
            <td>{item.email}</td>
            <td>{item.filmName}</td>
            <td>{item.name}</td>
            <td>{dayjs(item.date).format('DD/MM/YYYY')}</td>
            <td>{dayjs(item.time).format('HH:mm')}</td>
            {/* <td>{item.seat}</td> */}
            <td>
                <button type="button" className={`btn btn-${dayjs(item.date).valueOf() < dayjs().valueOf() ? 'danger' : 'success'} btn-sm`}>
                {dayjs(item.date).valueOf() < dayjs().valueOf() ? 'Hết hạn' : 'Chưa sử dụng'}
                </button>
            </td>
        </tr>
    );
};
