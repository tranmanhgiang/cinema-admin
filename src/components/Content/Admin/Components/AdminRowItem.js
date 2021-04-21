import React from "react";

export const AdminRowItem = ({index, item}) => {
    return (
        <tr>
            <td>{index}</td>
            <td>{item.lastName + item.firstName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
        </tr>
    );
};
