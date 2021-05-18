import React, { useEffect, useState } from "react";
import {MainSideBar} from '../../MainSideBar/MainSideBar';
import {NavBar} from '../../NavBar/NavBar';
import { ToastContainer } from "react-toastify";
import filmsApi from "../../../api/filmsApi";

export const Dashboard = () => {

    const [overView, setOverView] = useState({
        totalFilm: 0,
        totalTheater: 0,
        totalTicketOrder: 0,
        totalMember: 0
    });
    const [totalRevenue, setTotalRevenue] = useState({
        totalRevenue: 0,
        online: 0,
    });

    const getOverView = async () => {
        try {
            const res = await filmsApi.overview();
            setOverView(res);
        } catch (error) {
            console.log(error);
        }
    }

    const getTotalRevenue = async () => {
        try {
            const res = await filmsApi.getTotalRevenue();
            setTotalRevenue(res);
        } catch (error) {
            console.log(error);
        }
    }

    const formatCurrency = (currency) => {
        return String(currency).replace(/(.)(?=(\d{3})+$)/g,'$1.');
    }

    useEffect(() => {
        getOverView();
        getTotalRevenue();
    }, []);

    return (
        <>
            <MainSideBar />
            <NavBar />
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Dashboard</h1>
                            </div>
                            {/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <div>Trang chủ</div>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Dashboard
                                    </li>
                                </ol>
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        {/* Info boxes */}
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box">
                                    <span className="info-box-icon bg-info elevation-1">
                                        <i className="fas fa-film" />
                                    </span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">
                                            Phim
                                        </span>
                                        <span className="info-box-number">
                                            {overView.totalFilm}
                                        </span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                            </div>
                            {/* /.col */}
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box mb-3">
                                    <span className="info-box-icon bg-danger elevation-1">
                                        <i class="fas fa-theater-masks" />
                                    </span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">
                                            Rạp
                                        </span>
                                        <span className="info-box-number">
                                            {overView.totalTheater}
                                        </span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                            </div>
                            {/* /.col */}
                            {/* fix for small devices only */}
                            <div className="clearfix hidden-md-up" />
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box mb-3">
                                    <span className="info-box-icon bg-success elevation-1">
                                        <i class="fas fa-ticket-alt" />
                                    </span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">
                                            Vé đã bán
                                        </span>
                                        <span className="info-box-number">
                                            {overView.totalTicketOrder}
                                        </span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                            </div>
                            {/* /.col */}
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className="info-box mb-3">
                                    <span className="info-box-icon bg-warning elevation-1">
                                        <i className="fas fa-users" />
                                    </span>
                                    <div className="info-box-content">
                                        <span className="info-box-text">
                                            Thành viên
                                        </span>
                                        <span className="info-box-number">
                                            {overView.totalMember}
                                        </span>
                                    </div>
                                    {/* /.info-box-content */}
                                </div>
                                {/* /.info-box */}
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            Monthly Recap Report
                                        </h5>
                                        <div className="card-tools">
                                            <button
                                                type="button"
                                                className="btn btn-tool"
                                                data-card-widget="collapse"
                                            >
                                                <i className="fas fa-minus" />
                                            </button>
                                            <div className="btn-group">
                                                <button
                                                    type="button"
                                                    className="btn btn-tool dropdown-toggle"
                                                    data-toggle="dropdown"
                                                >
                                                    <i className="fas fa-wrench" />
                                                </button>
                                                <div
                                                    className="dropdown-menu dropdown-menu-right"
                                                    role="menu"
                                                >
                                                    <div className="dropdown-item">
                                                        Action
                                                    </div>
                                                    <div className="dropdown-item">
                                                        Another action
                                                    </div>
                                                    <div className="dropdown-item">
                                                        Something else here
                                                    </div>
                                                    <div className="dropdown-item">
                                                        Separated link
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                className="btn btn-tool"
                                                data-card-widget="remove"
                                            >
                                                <i className="fas fa-times" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-8">
                                                <p className="text-center">
                                                    <strong>
                                                        Sales: 1 Jan, 2014 - 30
                                                        Jul, 2014
                                                    </strong>
                                                </p>
                                                <div className="chart">
                                                    <canvas
                                                        id="salesChart"
                                                        height={180}
                                                        style={{
                                                            height: "180px",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <p className="text-center">
                                                    <strong>
                                                        Goal Completion
                                                    </strong>
                                                </p>
                                                <div className="progress-group">
                                                    Add Products to Cart
                                                    <span className="float-right">
                                                        <b>160</b>/200
                                                    </span>
                                                    <div className="progress progress-sm">
                                                        <div
                                                            className="progress-bar bg-primary"
                                                            style={{
                                                                width: "80%",
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="progress-group">
                                                    Complete Purchase
                                                    <span className="float-right">
                                                        <b>310</b>/400
                                                    </span>
                                                    <div className="progress progress-sm">
                                                        <div
                                                            className="progress-bar bg-danger"
                                                            style={{
                                                                width: "75%",
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="progress-group">
                                                    <span className="progress-text">
                                                        Visit Premium Page
                                                    </span>
                                                    <span className="float-right">
                                                        <b>480</b>/800
                                                    </span>
                                                    <div className="progress progress-sm">
                                                        <div
                                                            className="progress-bar bg-success"
                                                            style={{
                                                                width: "60%",
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="progress-group">
                                                    Send Inquiries
                                                    <span className="float-right">
                                                        <b>250</b>/500
                                                    </span>
                                                    <div className="progress progress-sm">
                                                        <div
                                                            className="progress-bar bg-warning"
                                                            style={{
                                                                width: "50%",
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <div className="row">
                                            <div className="col-sm-4 col-6">
                                                <div className="description-block border-right">
                                                    <span className="description-percentage text-success">
                                                        100%
                                                    </span>
                                                    <h5 className="description-header">
                                                        {formatCurrency(parseInt(totalRevenue.totalRevenue))} vnđ
                                                    </h5>
                                                    <span className="description-text">
                                                        Tổng doanh thu
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-sm-4 col-6">
                                                <div className="description-block border-right">
                                                    <span className="description-percentage text-warning">
                                                        <i className="fas fa-caret-left" />{" "}
                                                        {(parseInt(totalRevenue.online)/parseInt(totalRevenue.totalRevenue) * 100).toFixed(2)} %
                                                    </span>
                                                    <h5 className="description-header">
                                                        {formatCurrency(parseInt(totalRevenue.online))} vnđ
                                                    </h5>
                                                    <span className="description-text">
                                                        Bán online
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-sm-4 col-6">
                                                <div className="description-block border-right">
                                                    <span className="description-percentage text-success">
                                                        <i className="fas fa-caret-up" />{" "}
                                                        {((parseInt(totalRevenue.totalRevenue) - parseInt(totalRevenue.online))/parseInt(totalRevenue.totalRevenue) * 100).toFixed(2)} %
                                                    </span>
                                                    <h5 className="description-header">
                                                        {formatCurrency(parseInt(totalRevenue.totalRevenue) - parseInt(totalRevenue.online))} vnđ
                                                    </h5>
                                                    <span className="description-text">
                                                        Bán tại quầy
                                                    </span>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/. container-fluid */}
                </section>
                {/* /.content */}
            </div>
            <ToastContainer />
        </>
    );
};
