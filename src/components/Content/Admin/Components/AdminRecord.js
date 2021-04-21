import React, {useState} from "react";
import "../AdminStyles.scss";

export const AdminRecord = ({onGoBack}) => {
    const [dataRecord, setDataRecord] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('dataSubmit: ', dataRecord);
    }

    return (
        <section className="content">
            <div className="container">
                <form onSubmit={handleSubmit} className="col-md-8 user-record">
                    <div className="title">Thêm admin</div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Họ</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Họ"
                            onChange={(event) => {
                                const value = event.target.value;
                                setDataRecord({ ...dataRecord, lastName: value });
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tên</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Tên"
                            onChange={(event) => {
                                const value = event.target.value;
                                setDataRecord({ ...dataRecord, firstName: value });
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
                            onChange={(event) => {
                                const value = event.target.value;
                                setDataRecord({ ...dataRecord, email: value });
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
                            onChange={(event) => {
                                const value = event.target.value;
                                setDataRecord({ ...dataRecord, phone: value });
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            onChange={(event) => {
                                const value = event.target.value;
                                setDataRecord({ ...dataRecord, password: value });
                            }}
                        />
                    </div>
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
                    <button type="submit" className="btn btn-danger" onClick={onGoBack}>
                        Hủy
                    </button>
                </form>
            </div>
            {/* /.container-fluid */}
        </section>
    );
};
