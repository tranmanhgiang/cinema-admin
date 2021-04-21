import React from "react";
import "../FilmsStyles.scss";

export const FilmItem = ({ item, selectedFilm }) => {
    return (
        <div className="col-md-2 mt-3" onClick={selectedFilm}>
            <div className="">
                <div className="">
                    <div className="row-item">
                        <div className="container">
                            <img
                                alt=""
                                src={item.imageUrl}
                                width="200"
                                height="250"
                            />
                            <h5 className="film-name">{item.filmName}</h5>
                            <div className="description mr-5 pr-5">
                                {item.description}
                            </div>
                            <div>
                                <i class="far fa-clock"></i>&nbsp;{" "}
                                {item.duration / 60000} phút
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
