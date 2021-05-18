import React, { useState, useEffect } from "react";
import { MainSideBar } from "../../MainSideBar/MainSideBar";
import { NavBar } from "../../NavBar/NavBar";
import { TheaterItem } from "./Components/TheaterItem";
import filmsApi from "../../../api/filmsApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export const Theater = () => {
    const [roomName, setRoomName] = useState("");
    const [listRooms, setListRooms] = useState([]);
    const [isShowInputName, setShowInputName] = useState(false);

    const getListRooms = async () => {
        try {
            const res = await filmsApi.getRooms();
            if (res.message === "true") {
                setListRooms(res.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const createRoom = async () => {
        try {
            if (roomName.length) {
                const res = await filmsApi.addRoom({ name: roomName });
                if (res.message === "true") {
                    toast.success("Thêm mới thành công");
                    getListRooms();
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getListRooms();
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
                </section>
                <div className="ml-3 mb-2 row">
                    <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => {
                            if (isShowInputName) {
                                createRoom();
                                setRoomName("");
                            }
                            setShowInputName(!isShowInputName);
                        }}
                    >
                        {!isShowInputName ? "Thêm" : "Xác nhận"}
                    </button>
                    {isShowInputName && (
                        <div className="col-md-2">
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Nhập tên phòng"
                                value={roomName}
                                onChange={(event) => {
                                    const value = event.target.value;
                                    setRoomName(value);
                                }}
                            />
                        </div>
                    )}
                </div>
                <section className="content">
                    <div className="row">
                        {listRooms?.map((item, index) => {
                            return <TheaterItem key={index} item={item} />;
                        })}
                    </div>
                </section>
            </div>
            <ToastContainer />
        </>
    );
};
