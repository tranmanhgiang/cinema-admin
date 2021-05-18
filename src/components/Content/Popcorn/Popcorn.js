import React, { useState, useEffect } from "react";
import { MainSideBar } from "../../MainSideBar/MainSideBar";
import { PopcornTable } from "./Components/PopcornTable";
import { PopcornRecord } from "./Components/PopcornRecord";
import { NavBar } from "../../NavBar/NavBar";
import filmsApi from "../../../api/filmsApi";
import { ToastContainer } from "react-toastify";

export const Popcorn = () => {
    const [isOpenRecord, setIsOpenRecord] = useState(false);
    const [listPopcorn, setListPopcorn] = useState([]);

    const getPopcorns = async () => {
        try {
            const res = await filmsApi.getPopcorns();
            setListPopcorn(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const onGoBack = () => {
        if (isOpenRecord) {
            setIsOpenRecord(false);
        }
    };

    useEffect(() => {
        getPopcorns()
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
                                <h1>Bỏng & nước</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <div>Home</div>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Bỏng & nước
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
                                                    Danh sách combo bỏng nước
                                                </h3>
                                            </div>
                                            <PopcornTable
                                                popcorns={listPopcorn}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                ) : (
                    <PopcornRecord onGoBack={onGoBack} getPopcorns={getPopcorns} />
                )}
            </div>
            <ToastContainer />
        </>
    );
};
