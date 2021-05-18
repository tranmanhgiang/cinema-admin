import React from "react";
import { TicketRowItem } from "./TicketRowItem";

export const TicketTable = ({ usersData, onSelectItemData }) => {
    return (
        <div className="card-body">
            <table id="example2" className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Khách hàng</th>
                        <th>Email</th>
                        <th>Phim</th>
                        <th>Phòng chiếu</th>
                        <th>Ngày</th>
                        <th>Giờ chiếu</th>
                        <th>Bỏng & nước</th>
                        <th>Hình thức</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {usersData?.map((item, index) => {
                        return (
                            <TicketRowItem
                                key={index}
                                index={index}
                                item={item}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
