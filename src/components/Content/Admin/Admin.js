import React, { useState, useEffect } from "react";
import { AdminTable } from "./Components/AdminTable";
import { AdminRecord } from "./Components/AdminRecord";
import usersApi from "../../../api/usersApi";
import { MainSideBar } from "../../MainSideBar/MainSideBar";
import { NavBar } from "../../NavBar/NavBar";

const data_users_fixed = [
    {
        id: 1,
        firstName: "Admin",
        lastName: "Admin",
        email: "amdin@gmail.com",
        phone: "1234567890",
        isDeleted: 0,
    },
    {
        id: 2,
        firstName: "Ha",
        lastName: "Nguyen",
        email: "nguyenha993@gmail.com",
        phone: "1234567890",
        isDeleted: 1,
    },
    {
        id: 3,
        firstName: "A",
        lastName: "Nguyen",
        email: "test@gmail.com",
        phone: "1234567890",
        isDeleted: 0,
    },
];

export const Admin = () => {
    const [isOpenRecord, setIsOpenRecord] = useState(false);

    const getAdmin = async () => {
        try {
            const res = await usersApi.getAll();
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAdmin();
    }, []);

    const onGoBack = () => {
        if (isOpenRecord) {
            setIsOpenRecord(false);
        }
    };

    return (
        <>
            <MainSideBar />
            <NavBar />
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Admin</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <div>Home</div>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Admin
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    {/* /.container-fluid */}
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
                                                    Danh sách admin
                                                </h3>
                                            </div>
                                            <AdminTable
                                                usersData={data_users_fixed}
                                            />
                                        </div>
                                    </div>
                                    {/* /.col */}
                                </div>
                                {/* /.row */}
                            </div>
                        </section>
                    </>
                ) : (
                    <AdminRecord onGoBack={onGoBack} />
                )}
                {/* /.content */}
            </div>
        </>
    );
};
