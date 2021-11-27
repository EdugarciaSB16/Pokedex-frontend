import axios from 'axios';

export const create = (opts = {}) => {
    const http = axios.create({
        // eslint-disable-next-line no-undef
        baseURL: `${process.env.REACT_APP_API_HOST}/api`,
        ...opts,
    });

    http.interceptors.response.use(
        (response) => response.data,
        (error) => {
            if (error.response && [404].includes(error.response.status)) {
                return error.response;
            }

            return Promise.reject(`error ${error}`);
        }
    );

    return http;
};