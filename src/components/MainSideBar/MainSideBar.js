import React from "react";
import { NavLink } from "react-router-dom";
export const MainSideBar = () => {
    return (
        <aside className="main-sidebar">
            {/* Brand Logo */}
            <a href="index3.html" className="brand-link">
                <img
                    src="dist/img/AdminLTELogo.png"
                    alt="AdminLTE Logo"
                    className="brand-image img-circle elevation-3"
                    style={{ opacity: ".8" }}
                />
                <span className="brand-text font-weight-light">Admin</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img
                            src="dist/img/user2-160x160.jpg"
                            className="img-circle elevation-2"
                            alt="User Image"
                        />
                    </div>
                    <div className="info">
                        <div className="d-block">
                            TranManhGiang
                        </div>
                    </div>
                </div>
                {/* SidebarSearch Form */}
                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                        <input
                            className="form-control form-control-sidebar"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <i className="fas fa-search fa-fw" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul
                        className="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                    >
                        {/* Add icons to the links using the .nav-icon class
                     with font-awesome or any other icon font library */}
                        <li className="nav-item">
                            <NavLink exact to="/dashboard" className="nav-link">
                                <i className="nav-icon fas fa-tachometer-alt" />
                                <p>Dashboard</p>
                            </NavLink>
                        </li>
                        <li className="nav-header">NGƯỜI DÙNG</li>
                        {/* <li className="nav-item">
                            <NavLink to="/admin" className="nav-link">
                                <i className="nav-icon fas fa-user" />
                                <p>Admin</p>
                            </NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink to="/users" className="nav-link">
                                <i className="nav-icon fas fa-users" />
                                <p>
                                    Người dùng
                                    <span className="badge badge-info right">
                                        2
                                    </span>
                                </p>
                            </NavLink>
                        </li>
                        <li className="nav-header">PHIM</li>
                        <li className="nav-item">
                            <NavLink to="/films" className="nav-link">
                                <i class="nav-icon fas fa-film"></i>
                                <p>Phim</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/schedule" className="nav-link">
                                <i className="nav-icon far fa-calendar-alt" />
                                <p>Lịch chiếu</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/theater" className="nav-link">
                                <i className="nav-icon fas fa-person-booth"></i>
                                <p>Phòng chiếu</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/tickets" className="nav-link">
                                <i className="nav-icon fas fa-ticket-alt"></i>
                                <p>Vé đã đặt</p>
                            </NavLink>
                        </li>
                        <li className="nav-header">GIẢM GIÁ</li>
                        <li className="nav-item">
                            <NavLink to="/coupon" className="nav-link">
                                <i class="nav-icon fab fa-cuttlefish"></i>
                                <p>Mã giảm giá</p>
                            </NavLink>
                        </li>
                        <li className="nav-header">BỎNG & NƯỚC</li>
                        <li className="nav-item">
                            <NavLink to="/popcorn" className="nav-link">
                                <i class="nav-icon fab fa-cuttlefish"></i>
                                <p>Bỏng nước</p>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>
    );
};
