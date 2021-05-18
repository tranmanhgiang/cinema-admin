import React, { useState, useEffect } from "react";
import { FilmItem } from "./Components/FilmItem";
import { FilmRecord } from "./Components/FilmRecord";
import { MainSideBar } from "../../MainSideBar/MainSideBar";
import { NavBar } from "../../NavBar/NavBar";
import { Seats } from "./Components/Seats/Seats";
import dayjs from "dayjs";
import { useHistory } from "react-router-dom";
import filmsApi from "../../../api/filmsApi";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./FilmsStyles.scss";

export const Films = () => {
    const history = useHistory();
    const [openRecord, setOpenRecord] = useState(false);
    const [isSelectFilm, setIsSelectFilm] = useState(false);
    const [listFilms, setListFilms] = useState({
        data: [
            {
                id: 0,
                fileName: "",
                imageUrl: "img",
                description: "",
                author: "",
                actors: "",
                releaseDate: "",
                duration: "",
            },
        ],
    });
    const [cinemaSelected, setCinemaSelected] = useState();
    const [showTime, setShowTime] = useState([]);
    const [bookingTime, setBookingTime] = useState();
    const [cinema, setCinema] = useState();
    const [resTemp, setResTemp] = useState();
    const [seatArr, setSeatArr] = useState([]);
    const [film, setFilm] = useState('');
    const [seatSelected, setSeatSelected] = useState([]);

    const getListFilms = async () => {
        try {
            const res = await filmsApi.getFilms();
            setListFilms(res);
        } catch (error) {
            console.log(error);
        }
    };

    const getCinemaByFilmId = async (id) => {
        try {
            const res = await filmsApi.getCinemaByFilmId({
                date: dayjs().format('YYYY-MM-DD'),
                filmId: id,
            });
            setResTemp(res);
            const newCinema = [];
            res.data.map((item) => {
                if (!newCinema.includes(item.roomId)) {
                    newCinema.push(item.roomId);
                }
            });
            setCinema(newCinema);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSelectTheater = (theaterId) => {
        setCinemaSelected(theaterId);
        const timeOfTheater = [];
        resTemp.data.map((item) => {
            if (item.roomId === theaterId) {
                timeOfTheater.push(item.timeMilestones);
            }
        });

        setShowTime(timeOfTheater);
    };

    const getFilmName = (id) => {
        const newFilmName = listFilms.data.find((film) => film.id === id);
        setFilm(newFilmName);
    };

    const selectedFilm = (id) => {
        setIsSelectFilm(true);
        getFilmName(id);
        getCinemaByFilmId(id);
    };

    const renderRoom = async () => {
        const seatSelected = await filmsApi.checkSeatSelected({
            theaterId: parseInt(cinemaSelected),
            filmId: film.id,
            date: dayjs().format('YYYY-MM-DD'),
            time: bookingTime,
        });
        const newSeatArr = [];
        for (let i = 1; i <= 30; i++) {
            newSeatArr.push({
                index: i,
                isSelected: seatSelected.data.includes(i),
            });
        }
        setSeatArr(newSeatArr);
    };

    const handleSelect = (seat) => {
        if (!seat.isSelected) {
            const seatIndex = seatSelected.indexOf(seat.index);
            const newSeatSelected = [...seatSelected];
            if (seatIndex !== -1) {
                newSeatSelected.splice(seatIndex, 1);
                setSeatSelected(newSeatSelected);
            } else {
                newSeatSelected.push(seat.index);
                setSeatSelected(newSeatSelected);
            }
        }
    };

    const handleBookTicket = async () => {
        const formBookTicket = {
            price: 75000 * seatSelected.length,
            date: dayjs().format('YYYY-MM-DD'),
            time: bookingTime,
            filmId: film.id,
            theaterId: cinemaSelected,
            seat: seatSelected,
            popcornId: "0"
        }
        try {
            const res = await filmsApi.bookTicketDirectly(formBookTicket);
            if (res.message === 'true') {
                toast.success("Đặt vé thành công");
                history.replace("/dashboard");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getListFilms();
    }, []);

    useEffect(() => {
        if (bookingTime) {
            renderRoom();
        }
    }, [bookingTime]);

    const onGoBack = () => {
        if (openRecord) {
            setOpenRecord(false);
        }
    };

    return (
        <>
            <MainSideBar />
            <NavBar />
            {!isSelectFilm ? (
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0">Phim</h1>
                                </div>
                                {/* /.col */}
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <div>Trang chủ</div>
                                        </li>
                                        <li className="breadcrumb-item active">
                                            Phim
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    {!openRecord ? (
                        <>
                            <div className="ml-3 mb-2">
                                <button
                                    type="button"
                                    class="btn btn-success"
                                    onClick={() => setOpenRecord(true)}
                                >
                                    Thêm
                                </button>
                            </div>
                            <section className="content">
                                <div className="container-fluid">
                                    <div className="row">
                                        {listFilms?.data.map((item, index) => {
                                            return (
                                                <FilmItem
                                                    key={index}
                                                    item={item}
                                                    selectedFilm={() =>
                                                        selectedFilm(item.id)
                                                    }
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </section>
                        </>
                    ) : (
                        <FilmRecord setOpenRecord={setOpenRecord} onGoBack={onGoBack} getListFilms={getListFilms} />
                    )}
                </div>
            ) : (
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>{film.filmName}</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <div>Trang chủ</div>
                                        </li>
                                        <li className="breadcrumb-item active">
                                            Phòng
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        {/* /.container-fluid */}
                    </section>
                    <div className="ml-3 mb-2">
                        <button
                            type="button"
                            class="btn"
                            onClick={() => setIsSelectFilm(false)}
                        >
                            {`<< Trở về`}
                        </button>
                    </div>
                    <section className="content">
                        <div className="row">
                            {cinema?.map((item, index) => {
                                return (
                                    <div
                                        className={`col-lg-2 col-6 ${
                                            cinemaSelected === item &&
                                            "bg-selected"
                                        }`}
                                        key={index}
                                        onClick={() => {
                                            handleSelectTheater(item);
                                            setBookingTime();
                                            setSeatSelected([]);
                                        }}
                                    >
                                        {/* small card */}
                                        <div className="small-box">
                                            <div
                                                className="inner"
                                                style={{ height: "150px" }}
                                            >
                                                <h3 style={{ color: cinemaSelected === item ? "white" : "black" }}>
                                                    cinema {item}
                                                </h3>
                                            </div>
                                            <div className="icon">
                                                <i className="nav-icon fas fa-person-booth"></i>
                                            </div>
                                            <a
                                                href="#"
                                                className="small-box-footer"
                                            >
                                                More info{" "}
                                                <i className="fas fa-arrow-circle-right" />
                                            </a>
                                        </div>
                                    </div>
                                );
                            })}
                            {/* ./col */}
                        </div>
                        {cinemaSelected && (
                            <>
                                <div
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: "20px",
                                    }}
                                >
                                    Giờ chiếu
                                </div>
                                <div className="row">
                                    {showTime?.map((time, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className={`time-option ${bookingTime === parseInt(time) && 'bg-selected'}`}
                                                style={{ color: bookingTime === parseInt(time) ? "white" : "black" }}
                                                onClick={() => {
                                                    setBookingTime(parseInt(time));
                                                    setSeatSelected([]);
                                                }}
                                            >
                                                {dayjs(parseInt(time, 10)).format("HH:mm A")}
                                            </div>
                                        );
                                    })}
                                </div>
                            </>
                        )}
                    </section>
                    {bookingTime && (
                        <div>
                            <div className="text-center screen mb-5">
                                Màn hình
                            </div>
                            <Seats seatArr={seatArr} seatSelected={seatSelected} handleSelect={handleSelect} />
                            {seatSelected.length ? 
                            (
                                <div className="row col-5 m-auto payment">
                                    <div className="row col-10">
                                        <div className="col-3">
                                            <div className="titleField">Phim</div>
                                            <div>{film.filmName}</div>
                                        </div>
                                        <div className="col-3">
                                            <div className="titleField">Số vé</div>
                                            <div>{seatSelected.length}</div>
                                        </div>
                                        <div className="col-3">
                                            <div className="titleField">Giờ chiếu</div>
                                            <div>{dayjs(bookingTime).format('HH:mm A')}</div>
                                        </div>
                                        <div className="col-3">
                                            <div className="titleField">Giá</div>
                                            <div>{75000 * seatSelected.length}</div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <button className="btn bg-selected text-white mt-2" onClick={() => handleBookTicket()}>Xác nhận</button>
                                    </div>
                                </div>
                            ) : ''}
                        </div>
                    )}
                </div>
            )}
            <ToastContainer />
        </>
    );
};
