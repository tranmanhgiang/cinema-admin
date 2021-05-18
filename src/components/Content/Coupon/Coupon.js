import React, { useState, useEffect } from "react";
import { MainSideBar } from "../../MainSideBar/MainSideBar";
import { CouponTable } from "./Components/CouponTable";
import { CouponRecord } from "./Components/CouponRecord";
import { NavBar } from "../../NavBar/NavBar";
import filmsApi from "../../../api/filmsApi";
import { ToastContainer } from "react-toastify";

export const Coupon = () => {
    const [isOpenRecord, setIsOpenRecord] = useState(false);
    const [listCoupons, setListCoupons] = useState([]);
    const [listFilms, setListFilms] = useState();

    const getCoupons = async () => {
        try {
            const res = await filmsApi.getCoupons();
            setListCoupons(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getListFilms = async () => {
        try {
            const res = await filmsApi.getFilms();
            setListFilms(res);
        } catch (error) {
            console.log(error);
        }
    }

    const onGoBack = () => {
        if (isOpenRecord) {
            setIsOpenRecord(false);
        }
    };

    useEffect(() => {
        getCoupons();
        getListFilms();
    }, []);

    return (
        <>
            <MainSideBar />
            <NavBar />
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Mã giảm giá</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <div>Home</div>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Mã giảm giá
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                {!isOpenRecord ? (
                    <>
                        <div className="ml-3 mb-2">
                            <button
                                type="button"
                                class="btn btn-success"
                                onClick={() => setIsOpenRecord(true)}
                            >
                                Thêm
                            </button>
                        </div>
                        <section className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">
                                                    Danh sách khuyến mại
                                                </h3>
                                            </div>
                                            <CouponTable
                                                coupons={listCoupons}
                                                listFilms={listFilms}
                                                getCoupons={getCoupons}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                ) : (
                    <CouponRecord onGoBack={onGoBack} getCoupons={getCoupons} />
                )}
            </div>
            <ToastContainer />
        </>
    );
};
