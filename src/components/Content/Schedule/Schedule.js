import React, { useState, useEffect } from "react";
import { MainSideBar } from "../../MainSideBar/MainSideBar";
import { ScheduleTable } from "./Components/ScheduleTable";
import { NavBar } from "../../NavBar/NavBar";
import filmsApi from "../../../api/filmsApi";
import { toast } from "react-toastify";
import dayjs from 'dayjs';
import "react-toastify/dist/ReactToastify.css";

export const Schedule = () => {
    const [startDate, setStartDate] = useState();
    const [scheduleDate, setScheduleData] = useState([]);
    const [listFilms, setListFilms] = useState([]);

    const getScheduleToday = async () => {
        try {
            const res = await filmsApi.getScheduleToday();
            if (res.message === "true") {
                setScheduleData(res.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getScheduleEndDate = async () => {
        try {
            const res = await filmsApi.getScheduleEndDate();
            if (res.message === "true") {
                setStartDate(res.date);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getListFilms = async () => {
        try {
            const res = await filmsApi.getFilms();
            if (res.message === "true") {
                setListFilms(res.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const makeSchedule = async () => {
        try {
            if (startDate) {
                const formatDate = dayjs(startDate).format('YYYY-MM-DD');
                console.log(formatDate);
                const res = await filmsApi.makeSchedule(formatDate);
                if (res.message === "true") {
                    toast.success("Cập nhật thành công");
                    getScheduleToday();
                } else {
                    toast.success("Cập nhật thất bại");
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getScheduleEndDate();
        getScheduleToday();
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
                                <h1>Lịch chiếu</h1>
                                <div>Ngày: {dayjs().format('DD/MM/YYYY')}</div>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <div>Trang chủ</div>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Lịch chiếu
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <>
                    <div className="ml-3 mb-2">
                        <button
                            type="button"
                            class="btn btn-success"
                            onClick={makeSchedule}
                        >
                            Cập nhật
                        </button>
                    </div>
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <ScheduleTable
                                            scheduleData={scheduleDate}
                                            listFilms={listFilms}
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
