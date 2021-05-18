import React, { useState, useEffect } from "react";
import dayjs from 'dayjs';
import filmsApi from '../../../../api/filmsApi';

export const TicketRowItem = ({index, item, onClickItem}) => {
    const [customerInfo, setCustomerInfo] = useState({lastName: '', firstName: '', email: ''});
    const [toppingInfo, setToppingInfo] = useState('');
    const getUsers = async () => {
        const res = await filmsApi.getUsers();
        const customer = res.data.find(user => user.id === item.userId);
        if (customer !== undefined) setCustomerInfo(customer);
    }

    const getPopcornDrinks = async () => {
        const res = await filmsApi.getPopcorns();
        const analysisPopcornArr = item.popcornId.split(",");
        let topping = '';        
        analysisPopcornArr.map((item) => {
            const temp = res.data.find(popcorn => popcorn.id === parseInt(item));
            if (temp !== undefined) topping += temp.name + " ";
        })
        if (topping !== undefined) setToppingInfo(topping);
    }

    useEffect(() => {
        getUsers();
        getPopcornDrinks();
    }, []);
    return (
        <tr onClick={onClickItem}>
            <td>{index}</td>
            <td>{customerInfo.lastName + customerInfo.firstName}</td>
            <td>{customerInfo.email}</td>
            <td>{item.filmName}</td>
            <td>{item.name}</td>
            <td>{dayjs(item.date).format('DD/MM/YYYY')}</td>
            <td>{dayjs(parseInt(item.time)).format('HH:mm')}</td>
            <td>{toppingInfo}</td>
            <td>{customerInfo.email ? 'online' : 'offline'}</td>
            <td>
                <span
                    onClick={() => {}}
                    class={`badge badge-${dayjs(item.date).valueOf() < dayjs().valueOf() ? "success" : "danger"
                    }`}
                >
                    {dayjs(item.date).valueOf() < dayjs().valueOf() ? "Hết hạn" : "Chưa sử dụng"}
                </span>
            </td>
        </tr>
    );
};
