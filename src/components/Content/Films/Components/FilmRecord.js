import React, { useState, useRef } from "react";
import "../FilmsStyles.scss";
import filmsApi from "../../../../api/filmsApi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dayjs from "dayjs";

export const FilmRecord = ({ setOpenRecord, onGoBack, getListFilms }) => {
    const inputFile = useRef(null);

    const [state, setState] = useState({
        file: "",
        imagePreviewUrl: "",
    });
    const [imageResponseUrl, setImageResponseUrl] = useState("");
    const [filmRecord, setFilmRecord] = useState({
        filmName: "",
        imageUrl: "",
        description: "",
        author: "",
        actors: "",
        releaseDate: "",
        duration: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("images", state.file);
        try {
            const res = await filmsApi.uploadImage(formData);
            setImageResponseUrl(res.images);
            setFilmRecord({ ...filmRecord, imageUrl: res.images });
            toast.success("Upload thành công!");
        } catch (error) {
            console.log(error);
        }
    };

    const handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setState({
                file: file,
                imagePreviewUrl: reader.result,
            });
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const onImageClick = () => {
        inputFile.current.click();
    };

    let { imagePreviewUrl } = state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
        $imagePreview = <img src={imagePreviewUrl} width="300" height="350" />;
    } else {
        $imagePreview = (
            <img src="dist/img/unnamed.png" width="300" height="350" />
        );
    }

    const handleCreateFilm = async (e) => {
        e.preventDefault();
        try {
            if (imageResponseUrl.length) {
                const res = await filmsApi.createFilm(filmRecord);
                if (res.message === "true") {
                    toast.success("Tạo phim thành công");
                    onGoBack();
                    getListFilms();
                } else {
                    toast.error("Bạn cần nhập đầy đủ thông tin của phim");
                }
            } else {
                toast.error("Bạn cần upload ảnh của phim");
            }
        } catch (error) {
            console.log(error);
            toast.error("Bạn cần nhập đầy đủ thông tin của phim");
        }
    };

    return (
        <section className="content">
            <div className="container row user-record">
                <div className="col-md-4 m-auto">
                    <div
                        onClick={onImageClick}
                        style={{ width: "300px", height: "350px" }}
                    >
                        {$imagePreview}
                    </div>
                    <div>
                        <input
                            style={{ display: "none" }}
                            ref={inputFile}
                            onChange={handleImageChange}
                            type="file"
                        />
                        {!imageResponseUrl.length ? (
                            <button
                                style={{ marginTop: "20px" }}
                                type="submit"
                                className="btn btn-success mr-1"
                                onClick={handleSubmit}
                            >
                                Đăng tải
                            </button>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <form className="col-md-8">
                    <div className="title">Thêm phim mới</div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tên phim</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Tên phim"
                            onChange={(event) => {
                                const value = event.target.value;
                                setFilmRecord({
                                    ...filmRecord,
                                    filmName: value,
                                });
                            }}
                        />
                    </div>
                    <div className="form-group row">
                        <div className="col-md-6">
                            <label htmlFor="exampleInputEmail1">Đạo diễn</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Đạo diễn"
                                onChange={(event) => {
                                    const value = event.target.value;
                                    setFilmRecord({
                                        ...filmRecord,
                                        author: value,
                                    });
                                }}
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="exampleInputEmail1">
                                Diễn viên
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Diễn viên"
                                onChange={(event) => {
                                    const value = event.target.value;
                                    setFilmRecord({
                                        ...filmRecord,
                                        actors: value,
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-6">
                            <label htmlFor="exampleInputEmail1 mr-5">
                                Ngày công chiếu
                            </label>
                            <div>
                                <DatePicker
                                    selected={new Date()}
                                    onChange={(date) => {
                                        setFilmRecord({
                                            ...filmRecord,
                                            releaseDate: dayjs(date).format(
                                                "YYYY-MM-DD"
                                            ),
                                        });
                                    }}
                                    minDate={new Date()}
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="exampleInputEmail1">
                                Thời lượng (phút)
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Thời lượng"
                                onChange={(event) => {
                                    const value = event.target.value;
                                    setFilmRecord({
                                        ...filmRecord,
                                        duration: value,
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Mô tả</label>
                        <textarea
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Mô tả"
                            rows="3"
                            onChange={(event) => {
                                const value = event.target.value;
                                setFilmRecord({
                                    ...filmRecord,
                                    description: value,
                                });
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-success mr-1"
                        onClick={handleCreateFilm}
                    >
                        Xác nhận
                    </button>
                    <button
                        type="submit"
                        className="btn btn-danger"
                        onClick={() => setOpenRecord(false)}
                    >
                        Hủy
                    </button>
                </form>
            </div>
            {/* /.container-fluid */}
        </section>
    );
};
