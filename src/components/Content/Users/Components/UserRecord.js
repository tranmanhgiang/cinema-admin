import React from "react";
import "../UserStyles.scss";

export const UserRecord = ({ userRecord, onGoBack, setUserRecord, onConfirm }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        onConfirm();
    }

    return (
        <section className="content">
            <div className="container">
                <form onSubmit={handleSubmit} className="col-md-8 user-record">
                    <div className="title">Thêm người dùng</div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Họ</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Họ"
                            value={userRecord.lastName}
                            onChange={(event) => {
                                const value = event.target.value;
                                setUserRecord({ ...userRecord, lastName: value });
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tên</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Tên"
                            value={userRecord.firstName}
                            onChange={(event) => {
                                const value = event.target.value;
                                setUserRecord({ ...userRecord, firstName: value });
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Email"
                            value={userRecord.email}
                            onChange={(event) => {
                                const value = event.target.value;
                                setUserRecord({ ...userRecord, email: value });
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                            Số điện thoại
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Số điện thoại"
                            value={userRecord.phone}
                            onChange={(event) => {
                                const value = event.target.value;
                                setUserRecord({ ...userRecord, phone: value });
                            }}
                        />
                    </div>
                    {!userRecord.id && 
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            onChange={(event) => {
                                const value = event.target.value;
                                setUserRecord({ ...userRecord, password: value });
                            }}
                        />
                    </div>}
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                        >
                            Check me out
                        </label>
                    </div>
                    <button type="submit" className="btn btn-success mr-1">
                        Xác nhận
                    </button>
                    <button
                        type="submit"
                        className="btn btn-danger"
                        onClick={onGoBack}
                    >
                        Hủy
                    </button>
                </form>
            </div>
        </section>
    );
};
