import React, { useState, useEffect } from "react";
import { UsersTable } from "./Components/UsersTable";
import { UserRecord } from "./Components/UserRecord";
import {MainSideBar} from '../../MainSideBar/MainSideBar';
import {NavBar} from '../../NavBar/NavBar';
import { ToastContainer } from "react-toastify";
import filmsApi from "../../../api/filmsApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const userRecordDefault = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    isDeleted: 0,
};

export const Users = () => {
    const [isOpenRecord, setIsOpenRecord] = useState(false);
    const [listUsers, setListUsers] = useState();
    const [userRecord, setUserRecord] = useState(userRecordDefault);

    const getUsers = async () => {
        try {
            const res = await filmsApi.getUsers();
            setListUsers(res);
        } catch(error) {
            console.log(error);
        }
    }

    const onSelectItemData = (itemId) => {
        const userSelect = listUsers?.data.find((data) => data.id === itemId);
        if (userSelect) {
            setIsOpenRecord(true);
            setUserRecord(userSelect);
        }
    };

    const onGoBack = () => {
        setUserRecord(userRecordDefault);
        if (isOpenRecord) {
            setIsOpenRecord(false);
        }
    };

    const onConfirm = async () => {
        try {
            if (!userRecord.id) {
                const res = await filmsApi.addUser(userRecord);
                if (res.message === 'true') {
                    toast.success("Thêm thành công");
                    onGoBack();
                    getUsers();
                } else {
                    toast.fail(`${res.message}`);
                }
            } else {
                const res = await filmsApi.editUser(userRecord);
                if (res.message === 'true') {
                    toast.success("Cập nhật thành công");
                    onGoBack();
                    getUsers();
                } else {
                    toast.fail(`${res.message}`);
                }
            }
        } catch (error) {
            console.log(error);
            toast.error('Email đã tồn tại');
        }
    }

    useEffect(() => {
        getUsers();
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
                                                    Danh sách người dùng
                                                </h3>
                                            </div>
                                            <UsersTable
                                                usersData={listUsers}
                                                getUsers={getUsers}
                                                onSelectItemData={
                                                    onSelectItemData
                                                }
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
                    <UserRecord userRecord={userRecord} onGoBack={onGoBack} setUserRecord={setUserRecord} onConfirm={onConfirm} />
                )}
                <ToastContainer />
            </div>
        </>
    );
};
