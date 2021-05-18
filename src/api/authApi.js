import axiosLoginClient from './axiosClient';

const adminUrl = '/admin/';

const authApi = {
    login: (params) => {
        const url = `${adminUrl}login`;
        return axiosLoginClient.post(url, params);
    },
}
export default authApi;
