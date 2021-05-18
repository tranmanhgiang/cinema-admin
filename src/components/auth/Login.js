import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginStyles.scss";
import authApi from "../../api/authApi";

export const Login = () => {
    const history = useHistory();
    const [adminField, setAdminField] = useState({ email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await authApi.login({
                email: adminField.email,
                password: adminField.password,
            });
            console.log(res);
            localStorage.setItem("accessToken", res.Token);
            history.replace("/dashboard");
            toast.success("Đăng nhập thành công");
        } catch (err) {
            console.log(err);
            toast.error("Email hoặc mật khẩu không chính xác");
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="col-md-3 mt-5 user-record">
                <div className="txtLogin">Đăng nhập</div>
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
                            setAdminField({ ...adminField, email: value });
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
                            setAdminField({ ...adminField, password: value });
                        }}
                    />
                </div>
                <button type="submit" className="btn btn-success mr-1">
                    Đăng nhập
                </button>
                <ToastContainer />
            </form>
        </div>
    );
};
