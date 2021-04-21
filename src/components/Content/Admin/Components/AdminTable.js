import React from "react";
import { AdminRowItem } from "./AdminRowItem";

export const AdminTable = ({usersData}) => {
    return (
        <div className="card-body">
            <table id="example2" className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Họ tên</th>
                        <th>Email</th>
                        <th>SĐT</th>
                    </tr>
                </thead>
                <tbody>
                    {usersData.map((item, index) => {
                        return <AdminRowItem key={index} index={index} item={item} />
                    })}
                </tbody>
            </table>
        </div>
    );
};
