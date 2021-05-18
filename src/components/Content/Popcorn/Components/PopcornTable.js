import React from "react";
import { PopcornRowItem } from "./PopcornRowItem";

export const PopcornTable = ({popcorns}) => {
    return (
        <div className="card-body">
            <table id="example2" className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Ảnh</th>
                        <th>Mô tả</th>
                        <th>Giá</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {popcorns.map((item, index) => {
                        return <PopcornRowItem key={index} index={index} item={item} />
                    })}
                </tbody>
            </table>
        </div>
    );
};
