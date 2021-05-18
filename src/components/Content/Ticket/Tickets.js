import React, { useState, useEffect } from "react";
import { TicketTable } from "./Components/TicketTable";
import { MainSideBar } from "../../MainSideBar/MainSideBar";
import { NavBar } from "../../NavBar/NavBar";
import filmApi from '../../../api/filmsApi';

const userRecordDefault = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    isDeleted: 0,
};

export const Tickets = () => {
    const [ordersList, setOrdersList] = useState();

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
                </section>
                <>
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
                            </div>
                        </div>
                    </section>
                </>
            </div>
        </>
    );
};
