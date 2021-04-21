import React from "react";
import { UsersRowItem } from "./UsersRowItem";

export const UsersTable = ({usersData, getUsers, onSelectItemData}) => {
    return (
        <div className="card-body">
            <table id="example2" className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Họ tên</th>
                        <th>Email</th>
                        <th>SĐT</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {usersData?.data.map((item, index) => {
                        return <UsersRowItem key={index} index={index} item={item} getUsers={getUsers} onClickItem={() => onSelectItemData(item.id)} />
                    })}
                </tbody>
            </table>
        </div>
    );
};
