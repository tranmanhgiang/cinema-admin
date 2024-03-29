import React from "react";
import filmsApi from "../../../../api/filmsApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UsersRowItem = ({ index, item, getUsers, onClickItem }) => {
    const handleBlockUser = async () => {
        try {
            const userUpdate = {
                id: item.id,
                firstName: item.firstName,
                lastName: item.lastName,
                email: item.email,
                phone: item.phone,
                isDeleted: item.isDeleted ? 0 : 1,
            };
            const res = await filmsApi.editUser(userUpdate);
            if (res.message === "true") {
                toast.success("Cập nhật thành công");
                getUsers();
            } else {
                toast.fail(`${res.message}`);
            }
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <tr>
            <td onClick={onClickItem}>{index + 1}</td>
            <td onClick={onClickItem}>{item.lastName + item.firstName}</td>
            <td onClick={onClickItem}>{item.email}</td>
            <td onClick={onClickItem}>0{item.phone}</td>
            <td>
                <span
                    onClick={handleBlockUser}
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
