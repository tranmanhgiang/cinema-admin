import React from "react";

export const TheaterItem = ({ item }) => {
    return (
        <div className="col-lg-2 col-6">
            {/* small card */}
            <div className="small-box">
                <div className="inner" style={{ height: "150px" }}>
                    <h3>{item.name}</h3>
                </div>
                <div className="icon">
                    <i className="nav-icon fas fa-person-booth"></i>
                </div>
                <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                </a>
            </div>
        </div>
    );
};
