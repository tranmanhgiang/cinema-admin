import React from "react";
import { MainSideBar } from "../../MainSideBar/MainSideBar";
import { NavBar } from "../../NavBar/NavBar";
import { TheaterItem } from "./Components/TheaterItem";

const theater_fixed = [
    { name: "cinema 1" },
    { name: "cinema 2" },
    { name: "cinema 3" },
    { name: "cinema 4" },
];

export const Theater = () => {
    return (
        <>
            <MainSideBar />
            <NavBar />
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Phòng chiếu</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <div>Trang chủ</div>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Phòng
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    {/* /.container-fluid */}
                </section>
                <div className="ml-3 mb-2">
                    <button
                        type="button"
                        class="btn btn-success"
                    >
                        Thêm
                    </button>
                </div>
                <section className="content">
                    <div className="row">
                        {theater_fixed.map((item, index) => {
                            return <TheaterItem key={index} item={item} />;
                        })}
                        {/* ./col */}
                    </div>
                </section>
            </div>
        </>
    );
};
