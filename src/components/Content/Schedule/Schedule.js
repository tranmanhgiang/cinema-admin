import React from "react";
import { MainSideBar } from "../../MainSideBar/MainSideBar";
import { ScheduleTable } from "./Components/ScheduleTable";
import { NavBar } from "../../NavBar/NavBar";

const data_schedule_fixed = [
    {
        filmName: "phimso1",
        name: "cinema1",
        date: 1617210000000,
        timeMilestones: 1617238800000,
    },
    {
        filmName: "phimso2",
        name: "cinema2",
        date: 1617246000000,
        timeMilestones: 1617246000000,
    },
    {
        filmName: "phimso3",
        name: "cinema3",
        date: 1617262920000,
        timeMilestones: 1617246000000,
    },
    {
        filmName: "phimso4",
        name: "cinema4",
        date: 1617210000000,
        timeMilestones: 1617238800000,
    },
];


export const Schedule = () => {

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
                                <h1>Lịch chiếu</h1>
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
                    {/* /.container-fluid */}
                </section>
                <>
                    <div className="ml-3 mb-2">
                        <button
                            type="button"
                            class="btn btn-success"
                            onClick={() => {}}
                        >
                            Lập lịch
                        </button>
                    </div>
                    <section className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <ScheduleTable
                                            scheduleData={data_schedule_fixed}
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
