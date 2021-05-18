import React, { useState, useRef, useEffect } from "react";
import Select from "react-select";
import "../CouponStyles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
    optionsCouponType,
    optionsMemberRole,
} from "../../../../common/constants";
import filmsApi from "../../../../api/filmsApi";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const couponDefault = {
    id: 0,
    name: "",
    couponCode: "",
    couponType: undefined,
    values: 0,
    memberRole: undefined,
    filmId: 0,
    startDate: "",
    endDate: "",
    imageUrl: "",
    description: "",
    isDeleted: 0,
};

export const CouponRecord = ({ onGoBack, getCoupons }) => {
    const inputFile = useRef(null);

    const [dataRecord, setDataRecord] = useState(couponDefault);
    const [listFilms, setListFilms] = useState([]);
    const [imageResponseUrl, setImageResponseUrl] = useState("");
    const [state, setState] = useState({
        file: "",
        imagePreviewUrl: "",
    });

    const getListFilms = async () => {
        const newListFilms = [{ value: 0, label: "Tất cả" }];
        try {
            const res = await filmsApi.getFilms();
            res.data.map((film) => {
                newListFilms.push({ value: film.id, label: film.filmName });
            });
            setListFilms(newListFilms);
        } catch (error) {
            console.log(error);
            toast.error('abc');
        }
    };

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
                const res = await filmsApi.addCoupon(dataRecord);
                if (res.message === "true") {
                    toast.success("Thêm mới thành công!");
                    onGoBack();
                    getCoupons();
                } else {
                    toast.error("Mã khuyến mại đã tồn tại");
                }
            } else {
                toast.error('Bạn cần upload ảnh trước khi tạo mã giảm giá');
            }
        } catch (err) {
            toast.error("Mã khuyến mại đã tồn tại");
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

    useEffect(() => {
        getListFilms();
    }, []);

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
                        ) : ""}
                    </div>
                </div>
                <form className="col-md-8">
                    <div className="title">Thêm mã giảm giá</div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                            Tên chương trình khuyến mại
                        </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            placeholder="Khuyến mại"
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
                        <label htmlFor="exampleInputEmail1">Mã</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            placeholder="Mã khuyến mại"
                            onChange={(event) => {
                                const value = event.target.value;
                                setDataRecord({
                                    ...dataRecord,
                                    couponCode: value,
                                });
                            }}
                        />
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">
                                Loại chương trình khuyến mại
                            </label>
                            <Select
                                options={optionsCouponType}
                                value={optionsCouponType[dataRecord.couponType]}
                                onChange={(opt) => {
                                    setDataRecord({
                                        ...dataRecord,
                                        couponType: opt.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Mức giảm</label>
                            <input
                                type="number"
                                required
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="(% hoặc vnd)"
                                onChange={(event) => {
                                    const value = event.target.value;
                                    setDataRecord({
                                        ...dataRecord,
                                        values: parseFloat(value),
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">
                                Áp dụng cho
                            </label>
                            <Select
                                options={optionsMemberRole}
                                value={optionsMemberRole[dataRecord.memberRole]}
                                onChange={(opt) => {
                                    setDataRecord({
                                        ...dataRecord,
                                        memberRole: opt.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Phim</label>
                            <Select
                                options={listFilms}
                                value={listFilms.find(
                                    (film) => film === dataRecord.filmId
                                )}
                                onChange={(opt) => {
                                    setDataRecord({
                                        ...dataRecord,
                                        filmId: opt.value,
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label
                            htmlFor="exampleInputEmail1"
                            className="col-md-3"
                        >
                            Thời gian bắt đầu
                        </label>
                        <DatePicker
                            selected={dataRecord.startDate}
                            onChange={(date) => {
                                console.log("date: ", date);
                                setDataRecord({
                                    ...dataRecord,
                                    startDate: dayjs(date).valueOf(),
                                });
                            }}
                            minDate={new Date()}
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="form-group">
                        <label
                            htmlFor="exampleInputEmail1"
                            className="col-md-3"
                        >
                            Thời gian kết thúc
                        </label>
                        <DatePicker
                            selected={dataRecord.endDate}
                            onChange={(date) => {
                                setDataRecord({
                                    ...dataRecord,
                                    endDate: dayjs(date).valueOf(),
                                });
                            }}
                            minDate={dataRecord.startDate}
                            dateFormat="dd/MM/yyyy"
                        />
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
                                setDataRecord({
                                    ...dataRecord,
                                    description: value,
                                });
                            }}
                        />
                    </div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-success mr-1">
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
