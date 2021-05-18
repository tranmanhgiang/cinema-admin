import React from "react";
import { CouponRowItem } from "./CouponRowItem";

export const CouponTable = ({coupons, listFilms, getCoupons}) => {
    return (
        <div className="card-body">
            <table id="example2" className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Mã</th>
                        <th>Ảnh</th>
                        <th>Loại</th>
                        <th>Mức giảm</th>
                        <th>Áp dụng</th>
                        <th>Phim</th>
                        <th>Thời gian bắt đầu</th>
                        <th>Thời gian kết thúc</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {coupons.map((item, index) => {
                        return <CouponRowItem key={index} index={index} item={item} listFilms={listFilms} getCoupons={getCoupons} />
                    })}
                </tbody>
            </table>
        </div>
    );
};
