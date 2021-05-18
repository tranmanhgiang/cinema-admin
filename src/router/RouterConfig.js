import React from "react";
import { Dashboard } from "../components/Content/Dashboard/Dashboard";
import { Users } from "../components/Content/Users/Users";
import { Admin } from "../components/Content/Admin/Admin";
import { Films } from "../components/Content/Films/Films";
import { Login } from "../components/auth/Login";
import { Schedule } from "../components/Content/Schedule/Schedule";
import { Tickets } from "../components/Content/Ticket/Tickets";
import { Theater } from "../components/Content/Theater/Theater";
import { Coupon } from "../components/Content/Coupon/Coupon";
import { Popcorn } from "../components/Content/Popcorn/Popcorn";
import { Route, Redirect } from "react-router-dom";

export const RouterConfig = () => {
    return (
        <div>
            <Route exact path="/" component={Login} />
            <Route
                exact
                path="/dashboard"
                render={() => {
                    return localStorage.getItem("accessToken") ? (
                        <Dashboard />
                    ) : (
                        <Redirect to="/" />
                    );
                }}
            />
            <Route
                exact
                path="/users"
                render={() => {
                    return localStorage.getItem("accessToken") ? (
                        <Users />
                    ) : (
                        <Redirect to="/" />
                    );
                }}
            />
            <Route
                exact
                path="/admin"
                render={() => {
                    return localStorage.getItem("accessToken") ? (
                        <Admin />
                    ) : (
                        <Redirect to="/" />
                    );
                }}
            />
            <Route
                exact
                path="/films"
                render={() => {
                    return localStorage.getItem("accessToken") ? (
                        <Films />
                    ) : (
                        <Redirect to="/" />
                    );
                }}
            />
            <Route
                exact
                path="/schedule"
                render={() => {
                    return localStorage.getItem("accessToken") ? (
                        <Schedule />
                    ) : (
                        <Redirect to="/" />
                    );
                }}
            />
            <Route
                exact
                path="/theater"
                render={() => {
                    return localStorage.getItem("accessToken") ? (
                        <Theater />
                    ) : (
                        <Redirect to="/" />
                    );
                }}
            />
            <Route
                exact
                path="/tickets"
                render={() => {
                    return localStorage.getItem("accessToken") ? (
                        <Tickets />
                    ) : (
                        <Redirect to="/" />
                    );
                }}
            />
            <Route
                exact
                path="/coupon"
                render={() => {
                    return localStorage.getItem("accessToken") ? (
                        <Coupon />
                    ) : (
                        <Redirect to="/" />
                    );
                }}
            />
            <Route
                exact
                path="/popcorn"
                render={() => {
                    return localStorage.getItem("accessToken") ? (
                        <Popcorn />
                    ) : (
                        <Redirect to="/" />
                    );
                }}
            />
        </div>
    );
};
