import React from "react";
import { useHistory } from "react-router-dom";

export const NavBar = () => {
    const history = useHistory();

    const logOut = () => {
        localStorage.removeItem("accessToken");
        history.replace("/");
    };
    return (
        <>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <div
                            className="nav-link"
                            data-widget="pushmenu"
                            href=""
                            role="button"
                        >
                            <i className="fas fa-bars" />
                        </div>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <div className="nav-link">Home</div>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <div className="nav-link">Contact</div>
                    </li>
                </ul>
                {/* Right navbar links */}
                <ul className="navbar-nav ml-auto">
                    {/* Navbar Search */}
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-widget="navbar-search"
                            href=""
                            role="button"
                        >
                            <i className="fas fa-search" />
                        </a>
                        <div className="navbar-search-block">
                            <form className="form-inline">
                                <div className="input-group input-group-sm">
                                    <input
                                        className="form-control form-control-navbar"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                    <div className="input-group-append">
                                        <button
                                            className="btn btn-navbar"
                                            type="submit"
                                        >
                                            <i className="fas fa-search" />
                                        </button>
                                        <button
                                            className="btn btn-navbar"
                                            type="button"
                                            data-widget="navbar-search"
                                        >
                                            <i className="fas fa-times" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>
                    {/* Messages Dropdown Menu */}
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="">
                            <i className="far fa-comments" />
                            <span className="badge badge-danger navbar-badge">
                                3
                            </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <a href="" className="dropdown-item">
                                {/* Message Start */}
                                <div className="media">
                                    <img
                                        src="dist/img/user1-128x128.jpg"
                                        alt="User Avatar"
                                        className="img-size-50 mr-3 img-circle"
                                    />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            Brad Diesel
                                            <span className="float-right text-sm text-danger">
                                                <i className="fas fa-star" />
                                            </span>
                                        </h3>
                                        <p className="text-sm">
                                            Call me whenever you can...
                                        </p>
                                        <p className="text-sm text-muted">
                                            <i className="far fa-clock mr-1" />{" "}
                                            4 Hours Ago
                                        </p>
                                    </div>
                                </div>
                                {/* Message End */}
                            </a>
                            <div className="dropdown-divider" />
                            <a href="" className="dropdown-item">
                                {/* Message Start */}
                                <div className="media">
                                    <img
                                        src="dist/img/user8-128x128.jpg"
                                        alt="User Avatar"
                                        className="img-size-50 img-circle mr-3"
                                    />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            John Pierce
                                            <span className="float-right text-sm text-muted">
                                                <i className="fas fa-star" />
                                            </span>
                                        </h3>
                                        <p className="text-sm">
                                            I got your message bro
                                        </p>
                                        <p className="text-sm text-muted">
                                            <i className="far fa-clock mr-1" />{" "}
                                            4 Hours Ago
                                        </p>
                                    </div>
                                </div>
                                {/* Message End */}
                            </a>
                            <div className="dropdown-divider" />
                            <a href="" className="dropdown-item">
                                {/* Message Start */}
                                <div className="media">
                                    <img
                                        src="dist/img/user3-128x128.jpg"
                                        alt="User Avatar"
                                        className="img-size-50 img-circle mr-3"
                                    />
                                    <div className="media-body">
                                        <h3 className="dropdown-item-title">
                                            Nora Silvester
                                            <span className="float-right text-sm text-warning">
                                                <i className="fas fa-star" />
                                            </span>
                                        </h3>
                                        <p className="text-sm">
                                            The subject goes here
                                        </p>
                                        <p className="text-sm text-muted">
                                            <i className="far fa-clock mr-1" />{" "}
                                            4 Hours Ago
                                        </p>
                                    </div>
                                </div>
                                {/* Message End */}
                            </a>
                            <div className="dropdown-divider" />
                            <a
                                href=""
                                className="dropdown-item dropdown-footer"
                            >
                                See All Messages
                            </a>
                        </div>
                    </li>
                    {/* Notifications Dropdown Menu */}
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="">
                            <i className="far fa-bell" />
                            <span className="badge badge-warning navbar-badge">
                                15
                            </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-item dropdown-header">
                                15 Notifications
                            </span>
                            <div className="dropdown-divider" />
                            <a href="" className="dropdown-item">
                                <i className="fas fa-envelope mr-2" /> 4 new
                                messages
                                <span className="float-right text-muted text-sm">
                                    3 mins
                                </span>
                            </a>
                            <div className="dropdown-divider" />
                            <a href="" className="dropdown-item">
                                <i className="fas fa-users mr-2" /> 8 friend
                                requests
                                <span className="float-right text-muted text-sm">
                                    12 hours
                                </span>
                            </a>
                            <div className="dropdown-divider" />
                            <a href="" className="dropdown-item">
                                <i className="fas fa-file mr-2" /> 3 new reports
                                <span className="float-right text-muted text-sm">
                                    2 days
                                </span>
                            </a>
                            <div className="dropdown-divider" />
                            <a
                                href=""
                                className="dropdown-item dropdown-footer"
                            >
                                See All Notifications
                            </a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-widget="fullscreen"
                            href=""
                            role="button"
                        >
                            <i className="fas fa-expand-arrows-alt" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-widget="control-sidebar"
                            data-slide="true"
                            href=""
                            role="button"
                            data-toggle="modal"
                            data-target="#exampleModal"
                        >
                            <i class="fas fa-power-off" />
                        </a>
                    </li>
                </ul>
            </nav>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Modal title
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Bạn chắc chắn muốn đăng xuất?
                        </div>
                        <div className="modal-footer">
                            <button onClick={logOut} type="button" data-dismiss="modal" className="btn btn-primary">
                                Xác nhận
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                            >
                                Hủy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            ); );
        </>
    );
};
