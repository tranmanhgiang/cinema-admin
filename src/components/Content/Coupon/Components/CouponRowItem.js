import React from "react";
import dayjs from "dayjs";
import filmsApi from "../../../../api/filmsApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CouponRowItem = ({ index, item, listFilms, getCoupons }) => {
    const convertMemberRoleToText = (role) => {
        let text = "";
        if (role === 0) {
            text = "Tất cả";
        } else if (role === 1) {
            text = "Thành viên bạc";
        } else {
            text = "Thành viên vàng";
        }
        return text;
    };

    const getFilmName = (id) => {
        let film = "";
        if (!id) {
            film = "Tất cả";
        } else {
            film = listFilms?.data.find((film) => film.id === id)?.filmName;
        }
        return film;
    };

    const handleBlockCoupon = async () => {
        try {
            const editCoupon = {
                id: item.id,
                name: item.name,
                couponCode: item.couponCode,
                couponType: item.couponType,
                values: item.values,
                memberRole: item.memberRole,
                filmId: item.filmId,
                startDate: item.startDate,
                endDate: item.endDate,
                imageUrl: item.imageUrl,
                description: item.description,
                isDeleted: item.isDeleted ? 0 : 1,
            };
            const res = await filmsApi.editCoupon(editCoupon);
            if (res.message === "true") {
                toast.success("Cập nhật thành công");
                getCoupons();
            } else {
                toast.fail(`${res.message}`);
            }
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.couponCode}</td>
            <td>
                <img src={item.imageUrl} width="100px" height="80px" />
            </td>
            <td>{!item.couponType ? "Giảm theo %" : "Giảm theo số tiền"}</td>
            <td>{`${item.values} ${!item.couponType ? "%" : "vnđ"}`}</td>
            <td>{convertMemberRoleToText(item.memberRole)}</td>
            <td>{getFilmName(item.filmId)}</td>
            <td>{dayjs(parseInt(item.startDate)).format("DD/MM/YYYY")}</td>
            <td>{dayjs(parseInt(item.endDate)).format("DD/MM/YYYY")}</td>
            <td>
                <span
                    onClick={handleBlockCoupon}
                    class={`badge badge-${
                        parseInt(item.endDate) < dayjs().valueOf()
                            ? "warning"
                            : !item.isDeleted
                            ? "success"
                            : "danger"
                    }`}
                >
                    {parseInt(item.endDate) < dayjs().valueOf()
                        ? "Hết hạn"
                        : !item.isDeleted
                        ? "Hoạt động"
                        : "Block"}
                </span>
            </td>
        </tr>
    );
};
