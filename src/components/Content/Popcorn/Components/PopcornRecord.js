import React, { useState, useRef } from "react";
import filmsApi from "../../../../api/filmsApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const popcornDefault = {
    id: 0,
    name: "",
    price: 0,
    imageUrl: "",
    description: "",
    isDeleted: 0,
};

export const PopcornRecord = ({ onGoBack, getPopcorns }) => {
    const inputFile = useRef(null);

    const [dataRecord, setDataRecord] = useState(popcornDefault);
    const [listFilms, setListFilms] = useState([]);
    const [imageResponseUrl, setImageResponseUrl] = useState("");
    const [state, setState] = useState({
        file: "",
        imagePreviewUrl: "",
    });

    const handleUploadImage = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("images", state.file);
        try {
            const res = await filmsApi.uploadImage(formData);
            setImageResponseUrl(res.images);
            setDataRecord({ ...dataRecord, imageUrl: res.images });
            toast.success("Upload thành công!");
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (imageResponseUrl.length) {
                const res = await filmsApi.addPopcorn(dataRecord);
                if (res.message === "true") {
                    toast.success("Thêm mới thành công!");
                    onGoBack();
                    getPopcorns();
                }
            } else {
                toast.error("Bạn cần upload ảnh trước khi tạo combo bỏng nước");
            }
        } catch (err) {
            console.log(err);
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
        $imagePreview = <img src={imagePreviewUrl} width="200" height="250" />;
    } else {
        $imagePreview = (
            <img src="dist/img/unnamed.png" width="200" height="250" />
        );
    }

    return (
        <section className="content">
            <div className="container row user-record">
                <div className="col-md-4 m-auto">
                    <div
                        onClick={onImageClick}
                        style={{ width: "200px", height: "250px" }}
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
                                onClick={handleUploadImage}
                            >
                                Đăng tải
                            </button>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
                <form className="col-md-8">
                    <div className="title">Thêm combo bỏng & nước</div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tên</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            placeholder="Tên"
                            onChange={(event) => {
                                const value = event.target.value;
                                setDataRecord({
                                    ...dataRecord,
                                    name: value,
                                });
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Giá</label>
                        <input
                            type="number"
                            required
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Nhập giá (vnđ)"
                            onChange={(event) => {
                                const value = event.target.value;
                                setDataRecord({
                                    ...dataRecord,
                                    price: parseFloat(value),
                                });
                            }}
                        />
                    </div><div className="form-group">
                        <label htmlFor="exampleInputPassword1">Mô tả</label>
                        <textarea
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Mô tả"
                            rows="3"
                            onChange={(event) => {
                                const value = event.target.value;
                                setDataRecord({
                                    ...dataRecord,
                                    description: value,
                                });
                            }}
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="btn btn-success mr-1"
                    >
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
            <ToastContainer />
        </section>
    );
};
