import axiosLoginClient from './axiosClient';

const cinemaUrl = '/cinema/';
const adminUrl = '/admin/';

const filmsApi = {
    getFilms: (params) => {
        const url = `${cinemaUrl}get-list-films`;
        return axiosLoginClient.get(url, { params });
    },

    getCinemaByFilmId: (params) => {
        const url = `${adminUrl}get-cinema-by-film-id`;
        return axiosLoginClient.post(url, params );
    },

    checkSeatSelected: (params) => {
        const url = `${cinemaUrl}check-seat-selected`;
        return axiosLoginClient.post(url, params);
    },

    addRoom: (params) => {
        const url = `${cinemaUrl}create-room`;
        return axiosLoginClient.post(url, params);
    },

    getRooms: (params) => {
        const url = `${cinemaUrl}get-rooms`;
        return axiosLoginClient.get(url, params);
    },

    bookTicketDirectly: (params) => {
        const url =`${adminUrl}buy-tickets-directly`;
        return axiosLoginClient.post(url, params);
    },

    overview: (params) => {
        const url =`${adminUrl}overview`;
        return axiosLoginClient.get(url, params);
    },

    getTotalRevenue: (params) => {
        const url =`${adminUrl}get-total-revenue`;
        return axiosLoginClient.get(url, params);
    },

    getUsers: (params) => {
        const url =`${adminUrl}get-users`;
        return axiosLoginClient.get(url, params);
    },

    addUser: (params) => {
        const url =`${adminUrl}add-user`;
        return axiosLoginClient.post(url, params);
    },

    editUser: (params) => {
        const url = `${adminUrl}edit-user`;
        return axiosLoginClient.post(url, params);
    },

    uploadImage: (params) => {
        const url = `${adminUrl}upload-image`;
        return axiosLoginClient.post(url, params);
    },

    createFilm: (params) => {
        const url = `${cinemaUrl}create-film`;
        return axiosLoginClient.post(url, params);
    },

    getOrdersList: (params) => {
        const url = `${adminUrl}get-orders-list`;
        return axiosLoginClient.get(url, params);
    },

    getCoupons: (params) => {
        const url = `${adminUrl}get-coupons`;
        return axiosLoginClient.get(url, params);
    },

    addCoupon: (params) => {
        const url = `${adminUrl}add-coupons`;
        return axiosLoginClient.post(url, params);
    },

    editCoupon: (params) => {
        const url = `${adminUrl}edit-coupon`;
        return axiosLoginClient.post(url, params);
    },

    getScheduleEndDate: (params) => {
        const url = `${adminUrl}get-schedule-end-date`;
        return axiosLoginClient.get(url, params);
    },

    makeSchedule: (params) => {
        const url = `${adminUrl}make-schedule`;
        return axiosLoginClient.post(url, params);
    },

    getScheduleToday: (params) => {
        const url = `${adminUrl}get-schedule-today`;
        return axiosLoginClient.get(url, params);
    },

    getPopcorns: (params) => {
        const url = `${cinemaUrl}get-popcorns`;
        return axiosLoginClient.get(url, params);
    },

    addPopcorn: (params) => {
        const url = `${cinemaUrl}add-popcorn`;
        return axiosLoginClient.post(url, params);
    },

}
export default filmsApi;