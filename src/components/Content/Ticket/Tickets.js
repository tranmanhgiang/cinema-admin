import React, { useState, useEffect } from "react";
import { TicketTable } from "./Components/TicketTable";
import { MainSideBar } from "../../MainSideBar/MainSideBar";
import { NavBar } from "../../NavBar/NavBar";
import filmApi from '../../../api/filmsApi';

const data_users_fixed = [
    {
        firstName: "Ha",
        lastName: "Nguyen",
        email: "nguyenha993@gmail.com",
        filmName: "phimso1",
        name: "cinema1",
        date: 1617210000000,
        timeMilestones: 1617238800000,
        seat: [1, 2, 3],
    },
    {
        firstName: "Ha",
        lastName: "Nguyen",
        email: "nguyenha993@gmail.com",
        filmName: "phimso1",
        name: "cinema1",
        date: 1617210000000,
        timeMilestones: 1617238800000,
        seat: [1, 2, 3],
    },
    {
        firstName: "Ha",
        lastName: "Nguyen",
        email: "nguyenha993@gmail.com",
        filmName: "phimso1",
        name: "cinema1",
        date: 1618419600000,
        timeMilestones: 1617238800000,
        seat: [1, 2, 3],
    },
];

const userRecordDefault = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    isDeleted: 0,
};

export const Tickets = () => {
    const [isOpenRecord, setIsOpenRecord] = useState(false);
    const [userRecord, setUserRecord] = useState(userRecordDefault);
    const [ordersList, setOrdersList] = useState();

    const onGoBack = () => {
        setUserRecord(userRecordDefault);
        if (isOpenRecord) {
            setIsOpenRecord(false);
        }
    };

    const getOrdersList = async () => {
        try {
            const res = await filmApi.getOrdersList();
            setOrdersList(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getOrdersList();
    }, []);

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
                                <h1>Users</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <div>Home</div>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Users
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    {/* /.container-fluid */}
                </section>
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
                                                Danh sách người dùng
                                            </h3>
                                        </div>
                                        <TicketTable
                                            usersData={ordersList}
                                        />
                                    </div>
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                        </div>
                    </section>
                </>
                {/* /.content */}
            </div>
        </>
    );
};
