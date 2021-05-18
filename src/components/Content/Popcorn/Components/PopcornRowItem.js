import React from "react";
import dayjs from "dayjs";
import filmsApi from "../../../../api/filmsApi";

export const PopcornRowItem = ({ index, item }) => {

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>
                <img src={item.imageUrl} width="100px" height="80px" />
            </td>
            <td>{item.description}</td>
            <td>{item.price} vnđ</td>
            <td>
                <span
                    onClick={() => {}}
                    class={`badge badge-${
                        !item.isDeleted ? "success" : "danger"
                    }`}
                >
                    {!item.isDeleted ? "Hoạt động" : "Block"}
                </span>
            </td>
        </tr>
    );
};
