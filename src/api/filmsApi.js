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
}
export default filmsApi;