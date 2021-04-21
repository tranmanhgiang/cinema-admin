import axiosLoginClient from './axiosClient';

const usersApi = {
    getAll: (params) => {
        const url = "/products";
        return axiosLoginClient.get(url, { params });
    },
}
export default usersApi;
